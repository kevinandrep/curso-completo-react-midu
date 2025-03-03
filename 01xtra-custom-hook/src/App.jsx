
import { useState } from "react"

function useToggle(initialValue) {
  const [value, SetValue] = useState(initialValue)

  const toggle = () => {
    SetValue(prev => !prev)
  }

  return [value, toggle]
}

function App() {

  const [isOn, toggleIsOn] = useToggle(true);


  return (
    <>
      <div>
        <p>Estado: {isOn ? "Encendido" : "Apagado"}</p>
        <button onClick={toggleIsOn}>Alternar</button>
      </div>
    </>
  )
}

export default App
