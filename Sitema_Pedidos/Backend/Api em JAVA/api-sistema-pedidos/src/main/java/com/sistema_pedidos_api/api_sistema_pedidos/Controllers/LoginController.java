package com.sistema_pedidos_api.api_sistema_pedidos.Controllers;


import com.sistema_pedidos_api.api_sistema_pedidos.Models.LoginRequest;
import com.sistema_pedidos_api.api_sistema_pedidos.Services.LoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

@CrossOrigin(origins = "*")

@RequestMapping("/userLogin")

public class LoginController {
    private final LoginService loginService;

    public LoginController (LoginService loginService){
        this.loginService = loginService;
    }

    @PostMapping
    public ResponseEntity<Object> autenticarUsuario(@RequestBody LoginRequest loginRequest){
        boolean autenticado = loginService.autenticarUsuario(loginRequest);
            if (autenticado){
            System.out.print("Usuario " + loginRequest.email + "Autenticado");
            return ResponseEntity.ok().body("{\"status\": \"success\"}");
        }else{
                System.out.println("Usuario não encontrado:-- " + loginRequest.email + " / " + loginRequest.senha);
                return  ResponseEntity.status(401).body("{\"error\": \"Email ou senha inválidos\"}");

        }
    }


}
