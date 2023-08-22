require('dotenv').config()
const Africastalking = require('africastalking')
    express = require('express'),
    cors = require('cors'),
    model = require('./model'),
    user = require('./model/user')    
    
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const africastalking = Africastalking({
    apiKey: process.env.API_KEY,
    username: 'sandbox',
})

const airtime = africastalking.AIRTIME

//   send sms
const sendSms = async (phone) => {
    
    try {
        const result = await africastalking.SMS.send({
            to: [phone],
            message: 'Just a test sms using africas talking api',
            from: `9751`
        })

        if(result){
            console.log(result)
        }
    } catch (error) {
        console.log(error)
    }
}


app.get('/', (req, res) => {
    res.send('This will link you to Africastalking')
})

app.post('/', (req, res) => {
    const {sesionId, serviceCode, phoneNumber, text} = req.body

    let response;

    const data = user()

    if(text == ''){
        response = 'CON Welcome to EHR Admin \n 1. create an acccount \n 2. I have an account continue '
    }

    if(text !== ''){
        let array = text.split('*')

        // if 
        if(array.length === 1){

            // create user account
            if(parseInt(array[0] == 1)){
                response = `CON Enter your full name`
            }

            // login user if already registered
            if(parseInt(array[0] == 2)){
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
                
                // search user details here
            }

        }else if(array.length == 3) {

            // checking id users selected 1 as first option
            // get all data needed
            if(parseInt(array[0]) == 1 && array[1] !== '' && array[2] !== ''){

                // create user account
                data.fullname = array[1]
                data.passcode = array[2]
                data.phonenumber = phoneNumber

                data.save(()=>{
                    response = `END Your data was saved successfully, you will get a confirmation message soon`
                })
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
})

app.post('/incoming-messages', (req, res) => {
    const data = req.body;
    console.log(data);
    res.sendStatus(200);
});

app.post('/delivery-reports', (req, res) => {
    const data = req.body;
    console.log(data);
    res.sendStatus(200);
  });


// sending airtime
const sendAirtime = async () => {
    try {
        const options = {
            recipients: [
                {
                    phoneNumber: '+2349079390551',
                    amount: 100,
                    currencyCode: 'NGN'
                }
            ]
        };

        airtime.send(options)
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        });

    } catch (error) {
        console.log(error.message)
    }
}

// making a voice call

const voice = africastalking.VOICE;

function makeCall (){
    const options = {
        callFrom : '+2349079390551',

        callTo: ['+2348035899027']
    }

    voice.call(options)
        .then((data)=>{
            console.log('call made')
        })
        .catch((error)=>{console.log(error.message)})
}


app.listen(process.env.PORT, ()=>{
    console.log(`server started : ${process.env.PORT}`)
})
