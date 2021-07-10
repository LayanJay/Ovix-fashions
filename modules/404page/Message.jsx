const Message = () => {
  return (
    <section className="text-center mb-5">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-playFair text-brown-dark font-bold mb-12">
        Woops....
      </h1>

      <div className="flex space-x-2 justify-center items-center mb-10">
        <span className="text-9xl font-bold text-textGray">4</span>
        <span className="text-9xl font-bold text-brown-dark">o</span>
        <span className="text-9xl font-bold text-textGray">4</span>
      </div>

      <div className="text-xl text-brown-dark">
        <h5>Looks like the page is not existing.</h5>
        <h5>Let&apos;s go back and try.</h5>
      </div>
    </section>
  )
}

export default Message
