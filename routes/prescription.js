const express = require('express'),
    router = express.Router(),
    controllers = require('../controller/prescription')


    router.route('/')
        .get()
        .post(controllers.createPrescription)


module.exports = router;