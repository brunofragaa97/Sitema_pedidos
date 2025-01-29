const express = require('express');
const PedidoController = require('../controlers/PedidoController');
const router = express.Router();

router.post('/pedidos', PedidoController.fazerPedido)

module.exports = router;