const ExcelClienteLoginService = require('./ExcelClienteLoginSerivce')


class LoginService {
    static async clienteLogin(clienteData){
        const autenticado = ExcelClienteLoginService.verificarCredenciais(clienteData.email, clienteData.senha)
        
        return autenticado;
    }
}

module.exports = LoginService;