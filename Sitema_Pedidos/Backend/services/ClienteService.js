const ExcelClienteSaveService = require('./ExcelClienteSaveService'); // Importa o serviço de Excel
const Cliente = require('../models/Cliente'); // Modelo de cliente, por exemplo

class ClienteService {
  // Método para cadastrar um novo cliente
  static async cadastrarCliente(clienteData) {
    const novoCliente = new Cliente(
      clienteData.nome,
      clienteData.senha,
      clienteData.cpf,
      clienteData.endereco,
      clienteData.cep,
      clienteData.email,
      clienteData.telefone);

    // Lógica para salvar o cliente (pode envolver um banco de dados ou arquivo)
    // Exemplo: Salvar o cliente no banco de dados ou em um arquivo Excel
    await ExcelClienteSaveService.salvarNoExcel(novoCliente); // Chama o serviço para salvar no Excel

    return novoCliente; // Retorna o cliente cadastrado
  }
}

module.exports = ClienteService;
