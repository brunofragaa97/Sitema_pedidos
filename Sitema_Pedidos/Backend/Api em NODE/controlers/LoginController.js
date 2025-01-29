const LoginService = require("../services/LoginService");


class LoginController{
    static async logarUser(req,res){
        const { email, senha} = req.body;
         
        try {
            const fazerLogin = await LoginService.clienteLogin({
                email,
                senha
            })
            if(fazerLogin){
            res.status(201).json({
                message: "Login bem sucedido"
            })
            console.log("Usuario Logado: " , email )
        }else{
            console.log ("Tentativa de login nao autorizada: ", email)
            res.status(401).json({
                message: "Usuario ou senha invalido"
            })
        }
        } catch(error){
            console.log ("erro no servidor: " , error)
            res.status(500).json({
                message: 'Erro ao autemticar cliente',
                error: error.message, // Retorna a mensagem de erro detalhada
              });
        }
       

    }
}

module.exports = LoginController;