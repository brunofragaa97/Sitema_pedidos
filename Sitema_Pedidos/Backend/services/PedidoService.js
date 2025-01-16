const Pedido = require('../models/Pedido')


class PedidoService {
    static async fazerPedido(dadosDoPedido){
        const novoPedido = new Pedido (
            dadosDoPedido.cliente,
            dadosDoPedido.itens,
            dadosDoPedido.total
        )
        return novoPedido;
    }
}

module.exports = PedidoService;