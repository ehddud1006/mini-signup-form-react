import React from 'react'

const FontSizeHandler = (props) => {
  const { fontSize, fontSizeHandler } = props

  return (
    <aside id="font-control-box" className="flex fixed bottom-0 right-0">
      <button
        data-testid="increase-font-btn"
        id="increase-font-btn"
        className="bg-white text-gray-500 border border-gray-300 hover:bg-red-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
        onClick={() => fontSizeHandler('increase')}
        disabled={fontSize >= 20}
      >
        +
      </button>
      <button
        data-testid="decrease-font-btn"
        id="decrease-font-btn"
        className="bg-white text-gray-500 border border-gray-300 hover:bg-blue-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
        onClick={() => fontSizeHandler('decrease')}
        disabled={fontSize <= 12}
      >
        -
      </button>
    </aside>
  )
}

export default FontSizeHandler
