class Cliente {
    constructor(id, nome, senha, email, endereco, cep, cpf, telefone) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.email = email;
        this.endereco = endereco;
        this.cep = cep;
        this.cpf = cpf;
        this.telefone = telefone;
    }
    toJson() {
        return {
            id: this.id,
            nome: this.nome,
            senha: this.senha,
            email: this.email,
            endereco: this.endereco,
            cep: this.cep,
            cpf: this.cpf,
            telefone: this.telefone
        }
    }
}

module.exports = Cliente;