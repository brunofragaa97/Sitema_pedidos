import { useState } from 'react'
import './App.css'
import CadastroCliente from './Components/CadastroCliente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CadastroCliente />
    </>
  )
}

export default App
