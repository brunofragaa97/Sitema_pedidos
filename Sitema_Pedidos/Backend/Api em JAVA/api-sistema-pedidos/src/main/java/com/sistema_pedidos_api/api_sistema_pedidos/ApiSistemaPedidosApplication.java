package com.sistema_pedidos_api.api_sistema_pedidos;

import com.sistema_pedidos_api.api_sistema_pedidos.Services.ClienteService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class ApiSistemaPedidosApplication implements CommandLineRunner {

	@Autowired
	private ClienteService clienteService;

	public static void main(String[] args) {
		SpringApplication.run(ApiSistemaPedidosApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Olá Desenvolvedor!");

		// Buscar todos os clientes
		clienteService.buscarClientes().forEach(cliente -> {
			System.out.println(cliente);  // Isso irá imprimir a string do cliente
		});
	}
}
