import React from "react";
import "../../styles/Cardapio.css";

const Cardapio = () => {
  return (
    <div className="background-container">
      <div className="menu-container">
        <h1 className="menu-title">Cardápio</h1>
        <ul className="menu-list">
          <li className="menu-item">
            <strong>Hambúrguer Clássico</strong>
            <p>Carne bovina, queijo, alface, tomate.</p>
          </li>
          <li className="menu-item">
            <strong>Hambúrguer Vegano</strong>
            <p>Grão-de-bico, alface, tomate, molho especial.</p>
          </li>
          <li className="menu-item">
            <strong>Cheese Bacon</strong>
            <p>Carne bovina, queijo cheddar, bacon crocante.</p>
          </li>
          <li className="menu-item">
            <strong>Hambúrguer Clássico</strong>
            <p>Carne bovina, queijo, alface, tomate.</p>
          </li>
          <li className="menu-item">
            <strong>Hambúrguer Clássico</strong>
            <p>Carne bovina, queijo, alface, tomate.</p>
          </li>
          <li className="menu-item">
            <strong>Hambúrguer Clássico</strong>
            <p>Carne bovina, queijo, alface, tomate.</p>
          </li>
          <li className="menu-item">
            <strong>Hambúrguer Clássico</strong>
            <p>Carne bovina, queijo, alface, tomate.</p>
          </li>
        </ul>
        <button className="order-button">Fazer Pedido</button>
      </div>
    </div>
  );
};

export default Cardapio;
