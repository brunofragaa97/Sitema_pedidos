import { useState } from 'react'
import './App.css'
import CadastroCliente from './Components/CadastroCliente'
import Pedido from './Components/Pedido'
import Index from './Components/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index />
    </>
  )
}

export default App
