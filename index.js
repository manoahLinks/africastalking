require('dotenv').config()
const Africastalking = require('africastalking'),
    express = require('express'),
    app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const africastalking = Africastalking({
    apiKey: process.env.API_KEY,
    username: 'sandbox',
})

app.post('/incoming-messages', (req, res) => {
    const data = req.body;
    console.log(`Received message: \n ${data}`);
    res.sendStatus(200);
});

app.post('/delivery-reports', (req, res) => {
    const data = req.body;
    console.log(`Received report: \n ${data}`);
    res.sendStatus(200);
  });


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

app.listen(process.env.PORT, ()=>{
    console.log(`server started : ${process.env.PORT}`)
})