import { useState } from "react"

//PRIMER HOOK
export function useToggle (initialValue) {
  const [value, setValue] = useState(initialValue)

  const toggle = () => {
    setValue(preValue => !preValue)
  }

  return [value, toggle]
}
