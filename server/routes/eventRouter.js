const router = require('express').Router(0);
const eventController = require('../controller/eventController.js');

router.get('/events', eventController.getEvents);

module.exports = router;