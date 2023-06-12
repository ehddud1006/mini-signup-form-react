import { useState } from 'react'
export const useFontSize = () => {
  const [fontSize, setFontSize] = useState(16)

  const fontSizeHandler = (flag) => {
    if (flag === 'increase' && fontSize >= BUTTON_VALUE_RANGE.MAX) return
    if (flag === 'decrease' && fontSize <= BUTTON_VALUE_RANGE.MIN) return

    flag === 'increase' ? setFontSize((prev) => prev + 1) : setFontSize((prev) => prev - 1)
  }

  return {
    fontSize,
    fontSizeHandler,
  }
}

const BUTTON_VALUE_RANGE = {
  MAX: 20,
  MIN: 12,
}
