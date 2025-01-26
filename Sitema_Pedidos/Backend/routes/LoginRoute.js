const express = require('express');
const LoginController = require('../controlers/LoginController');
const router = express.Router();

router.post('/loginRoute', LoginController.logarUser);

module.exports = router;