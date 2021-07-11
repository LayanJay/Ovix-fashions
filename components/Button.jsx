const Button = ({ text }) => {
  return (
    <div className="w-full cursor-pointer hover:bg-brown-semiDark transition ease-in h-12 text-lg bg-brown-dark rounded-full text-white flex items-center text-center justify-center">
      {text}
    </div>
  )
}

export default Button
