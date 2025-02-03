package com.sistema_pedidos_api.api_sistema_pedidos.Controllers;

import com.sistema_pedidos_api.api_sistema_pedidos.Services.ClienteService;
import com.sistema_pedidos_api.api_sistema_pedidos.Models.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity; // Importação do ResponseEntity
import org.springframework.web.bind.annotation.*;

//aqui definimos que a classe é um controlador REST
@RestController
//aqui permitimos conexão de qualquer origen, para o servidor ficar acessado atraves de seu endereço REGRA DE CORS
@CrossOrigin(origins = "*")
//aqui definimos a url base para essas requisições
@RequestMapping("/clientes")
public class ClienteController {

    //declara a dependencia do serviço cliente
    private final ClienteService clienteService;  //declara um atributo de cliente service

    //injeção de dependencia
    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    // Método que responde a requisições HTTP do tipo POST na rota /clientes
    @PostMapping
    public ResponseEntity<Object> cadastrarCliente(@RequestBody Cliente cliente) {
        clienteService.salvarCliente(cliente);
        System.out.println("Cliente Cadastrado: >>" + cliente + " <<");
        return ResponseEntity.ok().body("{\"status\": \"success\"}");
    }
}
