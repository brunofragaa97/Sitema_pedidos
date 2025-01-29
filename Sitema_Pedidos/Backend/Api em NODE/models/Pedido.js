class Pedido {
    constructor(cliente, itens, total, horarioPedido){
        this.cliente = cliente;
        this.itens = itens;
        this.total = total;
        this.horarioPedido = horarioPedido;
    }

    toJson(){
        return {
            cliente: this.cliente,
            itens: this.itens,
            total: this.total,
            horarioPedido: this.horarioPedido
        }
    }
}

module.exports = Pedido;

