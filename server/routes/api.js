const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/apiController');


router.get('/sports', ApiController.getSportsData);

module.exports = router;
