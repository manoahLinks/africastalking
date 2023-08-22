const express = require('express'),
    router = express.Router(),
    controller = require('../controller/user')

router.route('/')
    .get(controller.getUsers)


module.exports = router
