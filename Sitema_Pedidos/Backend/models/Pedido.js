class Pedido {
    constructor(cliente, itens, total){
        this.cliente = cliente;
        this.itens = itens;
        this.total = total;
    }

    toJson(){
        return {
            cliente: this.cliente,
            itens: this.itens,
            total: this.total
        }
    }
}

module.exports = Pedido

