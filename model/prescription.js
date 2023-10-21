const mongoose = require('mongoose')

const prescriptionSchema = new mongoose.Schema({
    patient: {type: String, unique: true},
    drug: {type: String},
    dosage : {type: String},

}, {timestamps: true})

const Prescription = mongoose.model('Prescription', prescriptionSchema)

module.exports = Prescription