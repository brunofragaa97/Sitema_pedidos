

class PedidoController{
    static async fazerPedido(req, res){
        const  {itens, total} = req.body;
        console.log(itens, total);


    }
}
module.exports = PedidoController;