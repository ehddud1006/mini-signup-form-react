import { useState } from 'react'

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)

  const onChange = (e) => {
    const { target } = e

    const value = target.value

    setValue(value)
  }

  return [value, onChange, setValue]
}

export default useInput
