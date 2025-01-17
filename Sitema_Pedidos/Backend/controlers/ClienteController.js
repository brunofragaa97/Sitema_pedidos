const ClienteService = require('../services/ClienteService');


class ClienteController {
    // Método para cadastrar o cliente
    static async cadastrarCliente(req, res) {
      const { nome, senha, cpf, endereco, cep, email, telefone } = req.body;
  
      try {
        // Chama o serviço que contém a lógica de cadastro
        const clienteCadastrado = await ClienteService.cadastrarCliente({
          nome,
          senha,
          cpf,
          endereco,
          cep,
          email,
          telefone,
        });
      
        res.status(201).json({
          message: 'Cliente cadastrado com sucesso!',
          cliente: clienteCadastrado.nome,
        });
        console.log("Novo cliente cadastrado: " , clienteCadastrado)
      } catch (error) {
        console.error("Erro no servidor:", error); // Adiciona log do erro no console
        res.status(500).json({
          message: 'Erro ao cadastrar cliente',
          error: error.message, // Retorna a mensagem de erro detalhada
        });
      }
    }
  }
  module.exports = ClienteController;  