package com.sistema_pedidos_api.api_sistema_pedidos.Services;


import com.sistema_pedidos_api.api_sistema_pedidos.Repositories.ClienteRepository;
import com.sistema_pedidos_api.api_sistema_pedidos.Models.Cliente;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ClienteService {
    private final ClienteRepository clienteRepository;


    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public void salvarCliente(Cliente cliente) {
        clienteRepository.save(cliente);
    }

    public List<Cliente> buscarClientes(){
        return clienteRepository.buscarClientes();
    }


}
