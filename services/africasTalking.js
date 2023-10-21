require('dotenv').config()
const Africastalking = require('africastalking'),
    User = require('../model/user'),
    Appointment = require('../model/appointment')

const africastalking = Africastalking({
    apiKey: process.env.API_KEY,
    username: 'sandbox',
})

// airtime config
const airtime = africastalking.AIRTIME

//   send sms
const sendSms = async (phone, content) => {

    try {
        const result = await africastalking.SMS.send({
            to: [phone],
            message: content,
            from: `9751`
        })

        if(result){
            console.log(result)
        }
    } catch (error) {
        console.log(error)
    }
}

exports.accessUssd = async (req, res) => {
    const {sesionId, serviceCode, phoneNumber, text} = req.body

    let response;


    if(text == ''){
        response = 'CON Welcome to EHR Admin \n 1. create an acccount \n 2. I have an account continue '
    }

    if(text !== ''){
        let array = text.split('*')

        // if
        if(array.length === 1){

            // create user account
            if(parseInt(array[0]) == 1){
                response = `CON Enter your full name`
            }

            // login user if already registered
            if(parseInt(array[0]) == 2){
                response = `CON Enter your passcode to continue`
            }

        }else if (array.length == 2) {

            // checking if users selected 1 as first
            // option and 1 as second option
            // create a passcode
            if(parseInt(array[0])  == 1 && array[1] !== ''){
                response = `CON create passcode atleast 8digits long \nEnter a passcode`
            }

            // check if user selected 2 as first option
            // and passcode entered is not empty
            // fetch details to cofirm if exist
            if(parseInt(array[0])  == 2 && array[1] !== ''){
                
                // finding user using phone number and checking if passcode is correct
                User.collection.findOne({phonenumber: phoneNumber})
                    .then((user) =>{
                        
                        if(!user){
                            response = `END you do not have an account pls create one and continue`
                        }

                        if(user) {
                            if(user.passcode == array[1]){
                                response = `CON Select a service \n1. My Appointments \n2.Lab Services \n3.Medication\n 0. back`
                            }else{
                                response = `END the passcode you provided is incorrect`
                            }
                        }
                    }).catch((error)=>{
                        response = `END ${error}`
                    })
            }

        }else if(array.length == 3) {

            // checking id users selected 1 as first option
            // get all data needed
            if(parseInt(array[0]) == 1 && array[1] !== '' && array[2] !== ''){

                // create user account

                const createUser = async () => {
                    const newUser = {fullname: array[1], passcode: array[2], phonenumber: phoneNumber}

                    try {

                        const result = await User.collection.insertOne(newUser)
                        sendSms(phoneNumber, 'Welcome EHR ADMIN,\nWe are glad to have you join us, do well to always dial our short codes when you need help. we always care about your well beign.\n Thanks BCM')
                        response = `END Your data was saved successfully, you will get a confirmation message soon`

                    } catch (error) {
                        response = `END error creating account`
                    }
                }

                createUser()

            }

            // appointment step 3
            if(parseInt(array[0]) == 2 && array[1] !== '' && parseInt(array[2]) == 1 ){

                response = `CON My Appointments\n1.Book appointment\n2.check my schedules`
            }
        }
        else if (array.length == 4) {

            // appointment step 4
            if(parseInt(array[2]) == 1 && parseInt(array[3]) == 1){
                response = `CON Enter prefered date (eg. 26/09/2023)`
            }


        }
        else if (array.length == 5){
            // appointment step5
            if(parseInt(array[2]) == 1 && parseInt(array[3]) == 1 &&  array[4] !== ''){
                response = `CON select a convinient time \n1.8am-10am\n2.10am-12pm\n3.12pm-2pm\n4.2pm-4pm`
            }

        }
        else if (array.length == 6){
            // appointment step6
            if(parseInt(array[2]) ==1 && parseInt(array[3]) == 1 &&  array[4] !== '' && array[5] !== ''){

                const createAppointment = async () => {
                    const newAppointment = {date: array[4], time: array[5], createdBy: phoneNumber}

                    try {

                        const result = await Appointment.collection.insertOne(newAppointment)
                        sendSms(phoneNumber, 'Dear User,\n this is to notify you that we have recieved your appointment booking, you will recieve a status sms sonnest alerting you about the appointment confirmation or reschedule\n Thanks BCM')
                        response = `END Your Appointment has been sent, you will recieve a message to alert for a confirmation or reschedule`

                    } catch (error) {
                        response = `END error Booking Appointment`
                    }
                }

                createAppointment()

            }
        }




        // if(parseInt(array[0]) == 1) {
        //     response = `CON Enter your full name`

        //     if(parseInt(array[1])){
        //         response = `CON Enter a vaild email address`

        //         if(parseInt(array[2])) {
        //             response = `CON select an eight (8) digit pin as passcode`

        //             if(parseInt(array[3])){
        //                 response = `CON confirm your passcode`

        //                 if(parseInt(array[3])){
        //                     response = `END You have successfully registered check sms for a verification`
        //                     sendSms(phoneNumber)
        //                 }
        //             }
        //         }
        //     }
        // }

        // if(parseInt(array[0]) == 2){
        //     response = `CON Enter your personal code to proceed \n0. back`

        //     if(parseInt(array[1])){
        //         response = `CON Select a service \n1. My Appointments \n2.Lab Services \n3.Medication\n 0. back`

        //         if(parseInt(array[2]) == 1){
        //             response = `CON Appointments \n1.Check my schedule\n2.Book Schedule\n0.`
        //         }

        //         if(parseInt(array[2]) == 2){
        //             response = `CON Lab services \n1.Check my result\n0.back`
        //         }

        //         if(parseInt(array[2]) == 3){
        //             response = `CON Medication \n1.Check my medications\n2.Medication schedule \n0.back`
        //         }
        //     }
        // }

    }

    setTimeout(()=>{
        res.send(response)
        res.end()
    }, 2000)
}

module.exports = exports