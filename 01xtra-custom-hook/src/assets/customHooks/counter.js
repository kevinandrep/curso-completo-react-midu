import { useState } from "react"

//SEGUNDO HOOK
export function useCounter(initialValue) {
    const[value, setCount] = useState(initialValue)
  
    const decrementCount = () => {
      setCount(preValue => preValue - 1)
    }
  
    const incrementCount = () => {
      setCount(preValue => preValue + 1)
    }
  
    const resetCount = () => {
      setCount(0)
    }
  
    return [value, incrementCount, decrementCount, resetCount]
  }