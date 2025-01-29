const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Caminho para o arquivo Excel
const excelFilePath = path.join(__dirname, '../clientes.xlsx');

class ExcelClienteLoginSerivce {

// Método para buscar email e senha na planilha
static buscarEmailESenha() {
    if (fs.existsSync(excelFilePath)) {
      // Lê o arquivo Excel
      const wb = XLSX.readFile(excelFilePath);
      const ws = wb.Sheets['Clientes'];

      if (ws) {
        // Converte a planilha para JSON
        const clientes = XLSX.utils.sheet_to_json(ws);

        // Retorna uma lista com os valores de email e senha
        return clientes.map(cliente => ({
          Email: cliente.Email,
          Senha: cliente.Senha,
        }));
      } else {
        console.log('A planilha "Clientes" não existe.');
        return [];
      }
    } else {
      console.log('Arquivo Excel não encontrado.');
      return [];
    }
  }
  static verificarCredenciais(email, senha) {
    if (fs.existsSync(excelFilePath)) {
      // Lê o arquivo Excel
      const wb = XLSX.readFile(excelFilePath);
      const ws = wb.Sheets['Clientes'];

      if (ws) {
        // Converte a planilha para JSON
        const clientes = XLSX.utils.sheet_to_json(ws);

        // Procura o cliente com o email e senha fornecidos
        const clienteEncontrado = clientes.find(
          cliente => cliente.Email === email && cliente.Senha === senha
        );

        // Retorna verdadeiro se o cliente foi encontrado, falso caso contrário
        return !!clienteEncontrado;
      } else {
        console.log('A planilha "Clientes" não existe.');
        return false;
      }
    } else {
      console.log('Arquivo Excel não encontrado.');
      return false;
    }
  }
}
module.exports = ExcelClienteLoginSerivce;