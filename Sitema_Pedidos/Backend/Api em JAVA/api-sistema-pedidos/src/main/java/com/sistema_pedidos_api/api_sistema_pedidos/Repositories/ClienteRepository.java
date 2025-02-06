package com.sistema_pedidos_api.api_sistema_pedidos.Repositories;

import com.sistema_pedidos_api.api_sistema_pedidos.Models.Cliente;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class ClienteRepository {
    private final JdbcTemplate jdbcTemplate;

    public ClienteRepository(JdbcTemplate jdbctemplate){
        this.jdbcTemplate = jdbctemplate;
    }

    public void save(Cliente cliente){
        String sql = "INSERT INTO clientes (id, nome, senha, cpf, endereco, cep, email, telefone) VALUES (?,?,?,?,?,?,?,?)";

        jdbcTemplate.update(sql, cliente.getId(),
                cliente.getNome(), cliente.getSenha(),
                cliente.getCpf(), cliente.getEndereco(),
                cliente.getCep(), cliente.getEmail(),
                cliente.getTelefone());
    }
    public List<Cliente> buscarClientes(){
        String sql = "SELECT * from clientes where nome = 'Daniela lima'";

        return jdbcTemplate.query(sql, (rs, rowNum) -> new Cliente(
                rs.getLong("ID"),
                rs.getString("nome"),
                rs.getString("cpf"),
                rs.getString("endereco"),
                rs.getString("cep"),
                rs.getString("email"),
                rs.getString("telefone")
        ));
    }


}
