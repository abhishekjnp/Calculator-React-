import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calculator from './components/Calculator.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <div className="card">
      < Calculator/>
      </div>
      
    </>
  )
}

export default App
