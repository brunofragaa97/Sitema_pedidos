import React, { useState } from "react";
import "../../styles/Cardapio.css";

const Cardapio = () => {
  const [pedido, setPedido] = useState({
    itens: [], // Lista de itens no pedido
    total: 0, // Total do pedido
  });
  const [erro, setErro] = useState(""); // Estado para mensagem de erro
  const [mostrarResumo, setMostrarResumo] = useState(false); // Alterna para exibir o resumo do pedido

  const cardapio = [
    { id: 1, nome: "Hambúrguer Clássico", descricao: "Carne bovina, queijo, alface, tomate.", preco: 15 },
    { id: 2, nome: "Hambúrguer Vegano", descricao: "Grão-de-bico, alface, tomate, molho especial.", preco: 18 },
    { id: 3, nome: "Cheese Bacon", descricao: "Carne bovina, queijo cheddar, bacon crocante.", preco: 20 }, 
    { id: 4, nome: "Hambúrguer Clássico", descricao: "Carne bovina, queijo, alface, tomate.", preco: 15 },
    { id: 5, nome: "Hambúrguer Vegano", descricao: "Grão-de-bico, alface, tomate, molho especial.", preco: 18 },
    { id: 6, nome: "Cheese Bacon", descricao: "Carne bovina, queijo cheddar, bacon crocante.", preco: 20 }, 
    { id: 7, nome: "Hambúrguer Clássico", descricao: "Carne bovina, queijo, alface, tomate.", preco: 15 },
    { id: 8, nome: "Hambúrguer Vegano", descricao: "Grão-de-bico, alface, tomate, molho especial.", preco: 18 },
    { id: 9, nome: "Cheese Bacon", descricao: "Carne bovina, queijo cheddar, bacon crocante.", preco: 20 }, 
  ];

  const alterarQuantidade = (id, quantidade) => {
    setPedido((prev) => {
      const itensAtualizados = prev.itens.filter((item) => item.id !== id);
      if (quantidade > 0) {
        const item = cardapio.find((item) => item.id === id);
        itensAtualizados.push({ ...item, quantidade });
      }
      const total = itensAtualizados.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
      return { itens: itensAtualizados, total };
    });
  };

  const verificarPedido = () => {
    if (pedido.itens.length === 0) {
      setErro("Selecione ao menos um item para verificar o pedido!");
      return;
    }
    setErro("");
    setMostrarResumo(true);
  };

  const enviarPedido = async () => {
    
    console.log(pedido)
    try {
      if (pedido.itens.length === 0) {
        console.error("Nenhum item foi selecionado para envio.");
        return;
      }
      const response = await fetch("http://localhost:3000/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
      });

     
    } catch (error) {
      console.error("Erro ao enviar pedido:", error);
    }
  };

  return (
    <div className="background-container">
      <div className="menu-container">
        {!mostrarResumo ? (
          <>
            <h1 className="menu-title">Cardápio</h1>
            <ul className="menu-list">
              {cardapio.map((item) => (
                <li className="menu-item" key={item.id}>
                  <strong>{item.nome}</strong>
                  <p>{item.descricao}</p>
                  <div className="menu-controls">
                    <button
                      className="quantity-button"
                      onClick={() =>
                        alterarQuantidade(
                          item.id,
                          (pedido.itens.find((p) => p.id === item.id)?.quantidade || 0) - 1
                        )
                      }
                    >
                      -
                    </button>
                    <span className="quantity-display">
                      {pedido.itens.find((p) => p.id === item.id)?.quantidade || 0}
                    </span>
                    <button
                      className="quantity-button"
                      onClick={() =>
                        alterarQuantidade(
                          item.id,
                          (pedido.itens.find((p) => p.id === item.id)?.quantidade || 0) + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            {erro && <div className="error-message">{erro}</div>}
            <button className="order-button" onClick={verificarPedido}>
              Verificar Pedido
            </button>
          </>
        ) : (
          <div className="resumo-container">
            <h1>Resumo do Pedido</h1>
            <ul className="resumo-list">
              {pedido.itens.map((item) => (
                <li key={item.id}>
                  {item.nome} - {item.quantidade}x - R${item.quantidade * item.preco}
                </li>
              ))}
            </ul>
            <div className="total">Total: R$ {pedido.total}</div>
            <div className="div-button">
              <button onClick={() => setMostrarResumo(false)} className="btn-voltar">
                Voltar
              </button>
              <button className="btn-enviar" onClick={enviarPedido}>
                ENVIAR PEDIDO
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cardapio;
