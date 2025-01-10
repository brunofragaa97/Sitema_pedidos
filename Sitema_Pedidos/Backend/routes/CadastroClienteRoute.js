const express = require('express');
const CadastroClienteController = require('../controlers/CadastroClienteController');
const router = express.Router();

// Define a rota para o cadastro de cliente
router.post('/cadastroClienteRoute', CadastroClienteController.cadastrarCliente);

module.exports = router;








