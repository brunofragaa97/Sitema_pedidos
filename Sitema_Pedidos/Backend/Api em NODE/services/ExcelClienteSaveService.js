const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Caminho para o arquivo Excel
const excelFilePath = path.join(__dirname, '../clientes.xlsx');

class ExcelClienteSaveService {
  // Método para salvar no Excel
  static async salvarNoExcel(cliente) {
    // Verifica se o arquivo Excel já existe
    if (fs.existsSync(excelFilePath)) {
      // Se existir, abre o arquivo existente
      const wb = XLSX.readFile(excelFilePath);

      // Verifica se a planilha 'Clientes' já existe
      let ws = wb.Sheets['Clientes'];
      if (!ws) {
        // Se a planilha não existir, cria uma nova com os cabeçalhos fixos
        ws = XLSX.utils.aoa_to_sheet([[
          'Nome', 'Senha', 'CPF', 'Endereço', 'CEP', 'Email', 'Telefone'
        ]]);  // Cabeçalhos fixos
        XLSX.utils.book_append_sheet(wb, ws, 'Clientes');
      }

      // Converte a planilha para JSON (dados existentes)
      const clientesExistentes = XLSX.utils.sheet_to_json(ws);

      // Adiciona o novo cliente aos dados existentes
      clientesExistentes.push({
        Nome: cliente.nome,
        Senha: cliente.senha,
        CPF: cliente.cpf,
        Endereco: cliente.endereco,
        CEP: cliente.cep,
        Email: cliente.email,
        Telefone: cliente.telefone,
      });

      // Converte os dados atualizados de volta para planilha
      const updatedWs = XLSX.utils.json_to_sheet(clientesExistentes, { header: ['Nome', 'Senha', 'CPF', 'Endereço', 'CEP', 'Email', 'Telefone'] });

      // Substitui a planilha com os dados atualizados
      wb.Sheets['Clientes'] = updatedWs;

      // Salva o arquivo Excel com os dados atualizados
      XLSX.writeFile(wb, excelFilePath);
      console.log('Cliente salvo com sucesso no Excel!');
    } else {
      // Se o arquivo não existir, cria um novo
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([[
        'Nome', 'Senha', 'CPF', 'Endereço', 'CEP', 'Email', 'Telefone'
      ]]);  // Cabeçalhos fixos

      // Adiciona o novo cliente na primeira linha abaixo do cabeçalho
      XLSX.utils.sheet_add_json(ws, [{
        Nome: cliente.nome,
        Senha: cliente.senha,
        CPF: cliente.cpf,
        Endereco: cliente.endereco,
        CEP: cliente.cep,
        Email: cliente.email,
        Telefone: cliente.telefone,
      }], { header: ['Nome', 'Senha', 'CPF', 'Endereço', 'CEP', 'Email', 'Telefone'], skipHeader: true });

      XLSX.utils.book_append_sheet(wb, ws, 'Clientes');
      XLSX.writeFile(wb, excelFilePath);
      console.log('Cliente salvo com sucesso no Excel!');
    }
  }
}

module.exports = ExcelClienteSaveService;
