import { useState } from 'react'
import './App.css'
import CadastroCliente from './Components/CadastroCliente'
import Pedido from './Components/Pedido'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pedido />
    </>
  )
}

export default App
