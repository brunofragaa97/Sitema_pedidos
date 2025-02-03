package com.sistema_pedidos_api.api_sistema_pedidos.Models;

public class LoginRequest {
    public String email;
    public String senha;


    public LoginRequest() {
    }

    public String getEmail(){
        return this.email;
    }
    public void setEmail(String email){
        this.email = email;
    }

    public String getSenha(){
        return this.senha = senha;
    }
    public void setSenha(String senha){
        this.senha = senha;
    }


}


