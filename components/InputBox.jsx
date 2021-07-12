const InputBox = ({
  type = 'text',
  text,
  placeholder,
  required = false,
  name = '',
  onChange = null,
}) => {
  return (
    <div className="space-y-2 w-full text-xs">
      <label className="font-semibold text-brown-dark py-2">
        {text}
        {required ? <span className="text-red-600">*</span> : ''}
      </label>

      <input
        placeholder={placeholder}
        name={name}
        className="appearance-none placeholder-brown-base border-brown-dark block w-full bg-grey-lighter text-brown-dark border border-grey-lighter rounded-lg h-12 px-4"
        required={required}
        type={type}
        onChange={onChange}
      />
      <p className="text-red text-xs hidden">Please fill out this field.</p>
    </div>
  )
}

export default InputBox
