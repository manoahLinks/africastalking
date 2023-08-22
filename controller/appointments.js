const Appointments = require('../model/appointment')


// confirm appointment
exports.confirmAppointment = async (req, res) => {
    try {
        const {id} = req.params

        const response = await Appointments.findByIdAndUpdate(id, {isConfirmed: true}, {new: true})

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