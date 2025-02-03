package com.sistema_pedidos_api.api_sistema_pedidos.Services;


import com.sistema_pedidos_api.api_sistema_pedidos.Models.LoginRequest;
import com.sistema_pedidos_api.api_sistema_pedidos.Repositories.LoginRepository;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    private final LoginRepository loginRepository;

    public LoginService (LoginRepository loginRepository){
         this.loginRepository = loginRepository;
    }

    public boolean autenticarUsuario (LoginRequest loginRequest){
        String email = loginRequest.getEmail().trim();
        String senha = loginRequest.getSenha().trim();
        return loginRepository.autenticar(email, senha);
    }
}
