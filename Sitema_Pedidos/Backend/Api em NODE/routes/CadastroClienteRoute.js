const express = require('express');
const ClienteController = require('../controlers/ClienteController');
const router = express.Router();

// Define a rota para o cadastro de cliente
router.post('/cadastroClienteRoute', ClienteController.cadastrarCliente);

module.exports = router;








