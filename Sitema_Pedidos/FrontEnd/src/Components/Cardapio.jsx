import React, { useState } from "react";
import "../../styles/Cardapio.css";

const Cardapio = () => {
  const [pedido, setPedido] = useState({});
  const [erro, setErro] = useState(""); // Estado para mensagem de erro
  const [mostrarResumo, setMostrarResumo] = useState(false); // Alterna para exibir o resumo do pedido

  const cardapio = [
    {
      id: 1,
      nome: "Hambúrguer Clássico",
      descricao: "Carne bovina, queijo, alface, tomate.",
      preco: 15,
    },
    {
      id: 2,
      nome: "Hambúrguer Vegano",
      descricao: "Grão-de-bico, alface, tomate, molho especial.",
      preco: 18,
    },
    {
      id: 3,
      nome: "Cheese Bacon",
      descricao: "Carne bovina, queijo cheddar, bacon crocante.",
      preco: 20,
    },
    {
      id: 4,
      nome: "Hambúrguer Clássico",
      descricao: "Carne bovina, queijo, alface, tomate.",
      preco: 15,
    },
    {
      id: 5,
      nome: "Hambúrguer Vegano",
      descricao: "Grão-de-bico, alface, tomate, molho especial.",
      preco: 18,
    },
    {
      id: 6,
      nome: "Cheese Bacon",
      descricao: "Carne bovina, queijo cheddar, bacon crocante.",
      preco: 20,
    },
  ];

  const alterarQuantidade = (id, quantidade) => {
    setPedido((prev) => ({
      ...prev,
      [id]: {
        ...cardapio.find((item) => item.id === id),
        quantidade: Math.max(0, quantidade),
      },
    }));
  };

  const verificarPedido = () => {
    const itensSelecionados = Object.values(pedido).filter(
      (item) => item.quantidade > 0
    );
    if (itensSelecionados.length === 0) {
      setErro("Selecione ao menos um item para verificar o pedido!"); // Define a mensagem de erro
      return;
    }
    setErro(""); // Limpa o erro se a verificação for bem-sucedida
    setMostrarResumo(true); // Mostra o card com resumo do pedido
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
                          (pedido[item.id]?.quantidade || 0) - 1
                        )
                      }
                    >
                      -
                    </button>
                    <span className="quantity-display">
                      {pedido[item.id]?.quantidade || 0}
                    </span>
                    <button
                      className="quantity-button"
                      onClick={() =>
                        alterarQuantidade(
                          item.id,
                          (pedido[item.id]?.quantidade || 0) + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            {erro && <div className="error-message">{erro}</div>}{" "}
            {/* Exibe mensagem de erro */}
            <button className="order-button" onClick={verificarPedido}>
              Verificar Pedido
            </button>
          </>
        ) : (
          <div className="resumo-container">
            <h1>Resumo do Pedido</h1>
            <ul className="resumo-list">
              {Object.values(pedido)
                .filter((item) => item.quantidade > 0)
                .map((item) => (
                  <li key={item.id}>
                    {item.nome} - {item.quantidade}x - R${" "}
                    {item.quantidade * item.preco}
                  </li>
                ))}
            </ul>
            <div className="div-button">
              <button
                onClick={() => setMostrarResumo(false)}
                className="btn-voltar"
              >
                Voltar
              </button>
              <button className="btn-enviar">ENVIAR PEDIDO</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cardapio;
