const express = require('express');
const app = express();
const PORT = 3000;
const CadastroClienteRoute = require('./routes/CadastroClienteRoute')
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.use('/api', CadastroClienteRoute);



app.listen(PORT, () => {
    console.log (`Servidor rodando em http://localhost:${PORT}`)
})