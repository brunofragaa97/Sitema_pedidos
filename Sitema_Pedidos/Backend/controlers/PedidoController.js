const PedidoService = require("../services/PedidoService");

class PedidoController {
    static async fazerPedido(req, res) {
        const { cliente, itens, total } = req.body;

        try {
            const pedidoRealizado = await PedidoService.fazerPedido({
                cliente,
                itens,
                total
            });

            res.status(201).json({
                message: "Pedido enviado com sucesso meuirmao, parabens, Deus vive!"
            })
            console.log(pedidoRealizado);
        }catch(error) {
            console.log ("Erro no servidor ao fazer pedido: " , error)
            res.status(500).json({
                message: "Erro interno no servidor, pedido não realizado",
                error: error.message
            })
        }
}
}
module.exports = PedidoController