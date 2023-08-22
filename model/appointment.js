const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    createdBy: {type: String},
    time: {type: String, required:true},
    date: {type: String, required:true},
    reason: {type: String},
    isConfirmed: {type: Boolean, default: false},
    isRescheduled: {type: Boolean, default: false}

}, {timestamps: true})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment