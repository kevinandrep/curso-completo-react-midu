import {useCounter} from "./assets/customHooks/counter"
import { useLocalStorage } from "./assets/customHooks/localstorage"
import {useToggle} from "./assets/customHooks/toggle"

function App() {

  const[isOn, setIsOn] = useToggle(true)
  const[counter, addCounter, lessCounter, resetCounter] = useCounter(0)
  const[name, setName] = useLocalStorage("name", "")

  return (
    <>
    <p>Estado: {isOn ? "Encendido" : "Apagado"}</p>
    <button onClick={setIsOn}>Switch</button>

    <p>---------------</p>
    <p>Contador: {counter}</p>
    <button onClick={addCounter}>+</button>
    <button onClick={lessCounter}>-</button>
    <button onClick={resetCounter}>reset</button>

    <p>---------------</p>
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}>
      </input>
      <p>Nombre guardado: {name}</p>
    </div>

    </>
  )
}

export default App
