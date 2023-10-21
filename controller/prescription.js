const Prescription = require('../model/prescription');
const RadysisServices = require('../services/radysis')


// create a new prescription
exports.createPrescription = async (req, res) => {

    try {
        // get drugs and dosage
        const {drug, dosage} = req.body
        // get user phonenumber
        const {phone} = req.params

        const prescription = await Prescription.create({drug, dosage})

        // make a voice call to patient with a xml message with drug and dosage.

    RadysisServices.makeCall(phone, {content: drug})
    } catch (error) {
        return res.json(error.message)
    }

}

module.exports = exports