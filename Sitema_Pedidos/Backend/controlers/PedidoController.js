class PedidoController{
    static async fazerPedido(req, res){
        const  {itens, total} = req.body;
        

        res.status(201).json({
            message: "Pedido realizado com sucesso"
        })
        console.log("Pedido Realizado com sucesso: " , itens, total);
    }
}
module.exports = PedidoController