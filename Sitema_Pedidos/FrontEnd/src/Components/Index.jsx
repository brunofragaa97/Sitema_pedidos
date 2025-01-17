import { useEffect, useState } from "react";
import Modal from "./Modal";
import "../../styles/Cardapio.css";
import CadastroCliente from "./CadastroCliente";
import Pedido from "./Pedido";

const Index = () => {
  const [activeModalContent, setActiveModalContent] = useState(null);

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
        <button onClick={() => openModal(1)}>CADASTRAR</button>
        <button>ENTRAR</button>
        <Modal isOpen={activeModalContent === 1} onClose={closeModal}>
          
            <CadastroCliente closeModal={closeModal}/>
         
        </Modal>
      </div>
      <Pedido />
    </div>
  );
};

export default Index;
