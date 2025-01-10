const express = require ('express');
const router = express.Router();
const Cliente = require('../models/Cliente')

router.post('/cadastroClienteRoute', async (req, res) => {
    const { nome, senha, cpf, endereco, cep, email, telefone } = req.body;

    const novoCliente = new Cliente(nome, senha, cpf, endereco, cep, email, telefone)   
    res.status(201).json({
        message: "Cliente cadastrado com sucesso!",
        cliente: novoCliente
    })
});

module.exports = router;