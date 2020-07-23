const express = require('express');
const router = express.Router();

const simpleAPIController = require('../controllers/simple-api');

router.route('/')
.get(simpleAPIController.emulateGet);

router.route('/:num')
.get(simpleAPIController.emulateParam);

module.exports = router;