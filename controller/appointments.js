const Appointments = require('../model/appointment')

const africastalking = Africastalking({
    apiKey: process.env.API_KEY,
    username: 'sandbox',
})

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


// confirm appointment
exports.confirmAppointment = async (req, res) => {
    try {
        const {id} = req.params

        const response = await Appointments.findByIdAndUpdate(id, {isConfirmed: true}, {new: true})

        sendSms(JSON.parse(response).data.createdBy, `Your appointment has been confirmed you are book for \n Date: ${JSON.parse(response).data.date} \n Time: ${JSON.parse(response).data.time == 1 && `8am-10am` || JSON.parse(response).data.time == 2 && `10am-12am` || JSON.parse(response).data.time == 3 && `12pm-2pm` || JSON.parse(response).data.time == 4 && `2pm-4pm` || JSON.parse(response).data.time == 5 && `4pm-6pm`}`)
        return res.status(200).json({message: 'successful', data: response})

    } catch (error) {
        return res.status(400).json({message: 'Error confirming appointment', error: error.message})
    }
}

// get all appointments
exports.getAppointments = async (req, res) => {
    try {
        
        const response = await Appointments.find({})
        return res.status(200).json({message: 'success', data: response})

    } catch (error) {
        return res.status(400).json({message: 'There was error trying to get appointments', error: error.message})
    }
}

exports.getSingleAppointment = async (req, res) => {
    try {
        
        const {id} = req.params

        const response = await Appointments.findById(id)
        return res.status(200).json({message: 'success', data: response})

    } catch (error) {
        return res.status(400).json({message: 'There was error trying to get appointments', error: error.message})
    }
}

module.exports = exports