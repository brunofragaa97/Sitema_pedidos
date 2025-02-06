package com.sistema_pedidos_api.api_sistema_pedidos.Repositories;


import com.sistema_pedidos_api.api_sistema_pedidos.Models.Cliente;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class LoginRepository {
    private final JdbcTemplate jdbcTemplate;

    public LoginRepository (JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }
    public boolean autenticar (String email, String senha) {
        String sql = "SELECT COUNT(*) FROM clientes WHERE email = ? and senha = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, email, senha);
        return count != null && count > 0;
    }
}
