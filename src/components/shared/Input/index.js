const infoText = {
  id: 'id-msg',
  pw: 'pw-msg',
  'pw-check': 'pw-check-msg',
}

const Input = (props) => {
  const { label, id, type = 'text', message, ...rest } = props

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className={`shadow border rounded w-full py-2 px-3 text-gray-700 ${message !== '' && 'border-red-600'}`}
          type={type}
          {...rest}
        />
        <div id={infoText[id]} className="mt-1 mb-3 text-xs text-red-500">
          {message}
        </div>
      </div>
    </>
  )
}

export default Input
