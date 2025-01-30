package com.sistema_pedidos_api.api_sistema_pedidos.Controllers;

import com.sistema_pedidos_api.api_sistema_pedidos.Services.ClienteService;
import com.sistema_pedidos_api.api_sistema_pedidos.Models.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity; // Importação do ResponseEntity
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/clientes")
public class ClienteController {

    private final ClienteService clienteService;

    @Autowired
    public ClienteController(ClienteService clienteService){
        this.clienteService = clienteService;
    }

    // Método que responde a requisições HTTP do tipo POST na rota /clientes
    @PostMapping
    public ResponseEntity<Object> cadastrarCliente(@RequestBody Cliente cliente) {
        clienteService.salvarCliente(cliente);
        return ResponseEntity.ok().body("{\"status\": \"success\"}");
    }
}
