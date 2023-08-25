import dotenv from 'dotenv'
dotenv.config()
import Africastalking from 'africastalking'
import express, { response } from 'express'
import cors from 'cors'     
    
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const africastalking = Africastalking({
    apiKey: process.env.API_KEY,
    username: 'sandbox',
})

const airtime = africastalking.AIRTIME

app.get('/', (req, res) => {
    res.send('This will link you to Africastalking')
})

app.post('/', (req, res) => {
    const {sesionId, serviceCode, phoneNumber, text} = req.body

    let response;

    if(text == ''){
        response = 'CON Welcome to EHR Admin \n 1. create an acccount \n 2. I have an account continue '
    }

    if(text !== ''){
        let array = text.split('*')

        if(parseInt(array[0]) == 1) {
            response = `CON Enter your full name`
        }

        if(parseInt(array[0]) == 2){
            response = `CON Enter your personal code to proceed \n0. back`

            if(parseInt(array[1])){
                response = `CON Select a service \n1. My Appointments \n2.Lab Services \n3.Medication\n 0. back`

                if(parseInt(array[2]) == 1){
                    response = `CON 1.Check my schedule\n2.Book Schedule\n0.`
                }

                if(parseInt(array[2]) == 2){
                    response = `CON 1.Check my result\n0.back`
                }

                if(parseInt(array[2]) == 3){
                    response = `CON 1.Check my medications\n2.Medication schedule \n0.back`
                }
            }
        }

        
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


//   send sms
const sendSms = async () => {
    
    try {
        const result = await africastalking.SMS.send({
            to: ['+2349167338474', '+2349079390551'],
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

export default app