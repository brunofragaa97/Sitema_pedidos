const express = require('express');
const app = express();
const PORT = 3000;
const Cliente = require('./models/Cliente')

const clienteTeste1 = new Cliente (1, 'Joao', 'joao@gmail.com', '123.123.123-50')
const clienteTeste2 = new Cliente (2, 'Pedro', 'pedro@gmail.com', '123.123.123-50')

const clientes = [clienteTeste1, clienteTeste2]

app.get('/' , (req, res) => {
    res.send(clientes);
});


app.listen(PORT, () => {
    console.log (`Servidor rodando em http://localhost:${PORT}`)
})