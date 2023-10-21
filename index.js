require('dotenv').config()
const express = require('express'),
    cors = require('cors'),
    model = require('./model'),
    User = require('./model/user'),
    Appointment = require('./model/appointment'),
    appointmentRoute = require('./routes/appointments'),
    PrescriptionRoute = require('./routes/prescription'),
    userRoute = require('./routes/user'),
    ATServices = require('./services/africasTalking'),
    RadysisServices = require('./services/radysis')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// make radysis call
// RadysisServices.makeCall('+2349167338474', '')

app.get('/', (req, res) => {
    res.send('This will link you to Africastalking')
})

app.post('/', ATServices.accessUssd)

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

app.use('/prescribtion', PrescriptionRoute)


app.listen(process.env.PORT, ()=>{
    console.log(`server started : ${process.env.PORT}`)
})
