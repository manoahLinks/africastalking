require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.CLOUD_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Database connected')
    })
    .catch((error)=>{
        console.log(error)
    })