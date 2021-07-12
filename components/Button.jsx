import { AiOutlineLoading } from 'react-icons/ai'

const Button = ({
  text,
  onClick = null,
  disabled = false,
  type = 'button',
  isLoading = false,
}) => {
  return (
    <button
      className="flex space-x-2 items-center w-full cursor-pointer hover:bg-brown-semiDark transition ease-in h-12 text-lg bg-brown-dark rounded-full text-white text-center justify-center"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
      {isLoading ? <AiOutlineLoading className="animate-spin" /> : ''}
    </button>
  )
}

export default Button
