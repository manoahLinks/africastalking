require('dotenv').config()
// ENGAGED_AI IMPORTS
const callApis = require("engage-call-api-js-server-sdk/lib")

// ENGAGED_AI SETUP
callApis.OpenAPI.HEADERS = {'apikey': process.env.ENGAGED_AI_API_KEY}


const makeCall = (phone) => {
    callApis.CallService.makeCall(process.env.ACCT_ID, {

        "From":"+13252442014",

        //This must be the Phone number owned by you. For more information, see Phone Numbers.

        "To": phone,
        //This is the Phone number or client you want to call. For example, use 88779955@sipaz1.engageio.com to call an Engage client registered with user id (88779955).
    
    
        // "ApplicationID": "VDT-f5e6c694-a59a-409d-b0c9-2e6984852a76"
        "Eml":"<Response><Say>Dear Manoah, your are on a daily drug treatment, expected to take two tablets of panadol morning, afternoon and evening. remember to come fr your physio terapy on 12/12/2023!</Say></Response>"
    
    
        }).then(function(response){
    
           console.log("Success Response", response)
    
        }).catch(function(error){
    
           console.log("Error", error)
    
        })
}

module.exports = {
    makeCall
}