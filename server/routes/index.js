const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/example');

router.get('/', sendMessage);

module.exports = router;
