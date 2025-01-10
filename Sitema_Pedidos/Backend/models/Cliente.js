class Cliente {
    constructor(id, nome, senha, email, endereco, cep, cpf, telefone) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.cpf = cpf;
        this.endereco = endereco;
        this.cep = cep;
        this.email = email;
        this.telefone = telefone;
    }
    toJson() {
        return {
            id: this.id,
            nome: this.nome,
            senha: this.senha,
            cpf: this.cpf,
            endereco: this.endereco,
            cep: this.cep,
            email: this.email,
            telefone: this.telefone
        }
    }
}

module.exports = Cliente;