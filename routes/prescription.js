const express = require('express'),
    router = express.Router(),
    controllers = require('../controller/prescription')


    router.route('/:phone')
        .get()
        .post(controllers.createPrescription)


module.exports = router;