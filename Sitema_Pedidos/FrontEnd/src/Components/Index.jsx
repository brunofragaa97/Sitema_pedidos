import { useEffect, useState } from "react";
import ModalCadastro from "./ModalCadastro";
import ModalLogin from "./ModalLogin";
import "../../styles/Cardapio.css";
import CadastroCliente from "./CadastroCliente";
import Pedido from "./Pedido";
import Login from "./Login";
import "../index.css";
import "../App.css";

const Index = () => {
  const [activeModalContent, setActiveModalContent] = useState(null);
  const [isLoged, setIsLoged] = useState(localStorage.getItem("estadoDeLogin"));
  

  const onLogin = () => {
    setIsLoged(true);
    localStorage.setItem("estadoDeLogin", true)
  };

  const handleLogout = () => {
    setIsLoged(false);
    localStorage.removeItem("estadoDeLogin", true)
  };

  // Função para abrir o modal
  const openModal = (index) => {
    setActiveModalContent(index);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setActiveModalContent(null);
  };

  return (
    <div className="background-container">
      <div className="button-container">
        {!isLoged ? (
        <>
          <button onClick={() => openModal(1)}>CADASTRAR</button>
          <ModalCadastro isOpen={activeModalContent === 1} onClose={closeModal}>
            <CadastroCliente closeModal={closeModal} />
          </ModalCadastro>
          <button onClick={() => openModal(2)}>ENTRAR</button>
          <ModalLogin isOpen={activeModalContent === 2} onClose={closeModal}>
            <Login closeModal={closeModal} onLogin={onLogin} />
          </ModalLogin>
        </>
        ) : (
          <button onClick={handleLogout}>SAIR</button>
        )}
      </div>
      <Pedido />
    </div>
  );
};

export default Index;
