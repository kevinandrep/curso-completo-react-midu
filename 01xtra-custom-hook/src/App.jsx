import { useState } from "react"
import {useCounter} from "./assets/customHooks/counter"
import { useLocalStorage } from "./assets/customHooks/localstorage"
import {useToggle} from "./assets/customHooks/toggle"
import { useFetch } from "./assets/customHooks/usefetch"
import { usePrevious } from "./assets/customHooks/prevvalue"

function App() {

  const[isOn, setIsOn] = useToggle(true)
  const[counter, addCounter, lessCounter, resetCounter] = useCounter(0)
  const[name, setName] = useLocalStorage("name", "")
  const[data, loading, error] = useFetch("https://jsonplaceholder.typicode.com/todos/1")
  const[count, setCount] = useState(0)
  const prevCont = usePrevious(count)

  if (loading) return <p>Cargando...</p>
  if (error) return <p>{error.message}</p>

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

    <p>---------------</p>
    <div>
      <h3>{data ? data.userId : "Cargando datos..."}</h3>
    </div>

    <p>---------------</p>
    <div>
      <p>Contador actual: {count}</p>
      <p>Valor anterior: {prevCont}</p>
      <button onClick={() => setCount(c => c + 1)}>Incrementar</button>
    </div>
    


    </>
  )
}

export default App
