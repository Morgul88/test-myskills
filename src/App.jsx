import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Character from './Components/character'
import ButtonComponent from './Components/ButtonComponent'
import Child from './Components/Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="display">
      <div className="left">

        <button>Crete Character</button>
        <button>Equipment</button>
        <button>Talents Spec</button>
        

      </div>
      <div className="right">
      <ButtonComponent />
        <Character />
      </div>
    </div>
   
  )
}

export default App
