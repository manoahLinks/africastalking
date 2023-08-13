const Africastalking = require('africastalking'),
    express = require('express'),
    app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const africastalking = Africastalking({
    apiKey: '0668cfd186f078a9066fb251daaa7f3c135f3be2158fa6a7e5119b93bc5f5b70',
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

app.listen(9000, ()=>{
    console.log('server started')
})