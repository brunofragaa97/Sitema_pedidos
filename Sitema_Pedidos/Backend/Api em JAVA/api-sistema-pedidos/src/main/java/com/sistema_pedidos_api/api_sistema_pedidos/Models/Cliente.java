package com.sistema_pedidos_api.api_sistema_pedidos.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Cliente {

    @Id
    private Long id;

    private String nome;
    private String senha;
    private String cpf;
    private String endereco;
    private String cep;
    private String email;
    private String telefone;


    public Cliente(String nome, String senha, String cpf, String endereco, String cep, String email, String telefone) {
        this.nome = nome;
        this.senha = senha;
        this.cpf = cpf;
        this.endereco = endereco;
        this.cep = cep;
        this.email = email;
        this.telefone = telefone;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    @Override
    public String toString() {
        return "Cliente{" +
                "nome= " + nome + '\'' +
                ", email= " + email + '\'' +
                ", cpf=" + cpf + "/" +
                ", telefone= " + telefone + "/" +
                ", cep=" + cep + "/" +
                ", endereço= " + endereco + "/" +
                '}';
    }
}
