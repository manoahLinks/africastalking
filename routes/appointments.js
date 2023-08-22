const express = require('express'),
    router = express.Router(),
    controller = require('../controller/appointments')

router.route('/')
    .get(controller.getAppointments)

router.route('/:id')
    .get(controller.getSingleAppointment)

router.route('/:id/update')
    .patch(controller.confirmAppointment)


module.exports = router
