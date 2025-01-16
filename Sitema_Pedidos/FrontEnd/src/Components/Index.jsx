import "../../styles/Cardapio.css";
import CadastroCliente from "./CadastroCliente";
import Pedido from "./Pedido";

const Index = () => {
  return (
    <div className="background-container">
      <div className="button-container">
        <button>CADASTRAR</button>
        <button>ENTRAR</button>
      </div>
      <Pedido />
    </div>
  );
};

export default Index;
