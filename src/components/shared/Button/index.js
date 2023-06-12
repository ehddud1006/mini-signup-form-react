import React from 'react'

const Button = ({ children, color = 'gray', ...rest }) => {
  return (
    <button
      type="button"
      className={
        color === 'gray'
          ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500 mr-2'
          : 'border border-transparent bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500'
      }
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
