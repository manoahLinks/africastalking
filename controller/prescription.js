const Prescription = require('../model/prescription');
const RadysisServices = require('../services/radysis')


// create a new prescription
exports.createPrescription = async (req, res) => {

    try {
        // get drugs and dosage
        const {drug, dosage} = req.body
        // get user phonenumber
        const {phone} = req.params

        const prescription = await Prescription.create({patient: phone, drug, dosage})

        let content = `Hi dear, This is your prescribed dosage, take ${drug} every ${dosage}`

        // make a voice call to patient with a xml message with drug and dosage.
        await RadysisServices.makeCall(phone, content)

        return res.status(200).json(prescription);
    } catch (error) {
        return res.json(error.message)
    }

}

module.exports = exports