const express = require('express');
const app = express();
const PORT = 3000;
const CadastroClienteRoute = require('./routes/CadastroClienteRoute')
const PedidoRoute = require('./routes/PedidoRoute')
const LoginRoute = require('./routes/LoginRoute')
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.use('/api', [CadastroClienteRoute, PedidoRoute, LoginRoute]);



app.listen(PORT, () => {
    console.log (`Servidor rodando em http://localhost:${PORT}`)
})