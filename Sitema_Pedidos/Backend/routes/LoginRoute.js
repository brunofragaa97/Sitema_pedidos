const express = require('express');
const LoginController = require('../controlers/LoginController');
const router = express.Router();

router.post('/login', LoginController.logarUser);

module.exports = router;