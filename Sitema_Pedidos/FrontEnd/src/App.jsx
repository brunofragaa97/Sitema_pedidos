import { useState } from 'react'
import './App.css'
import CadastroCliente from './Components/CadastroCliente'
import Cardapio from './Components/Cardapio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cardapio />
    </>
  )
}

export default App
