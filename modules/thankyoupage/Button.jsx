import Link from 'next/link'

const Button = () => {
  return (
    <section>
      <Link href="/">
        <a>
          <button className="text-brown-dark rounded-full border-brown-dark border-2 hover:text-white hover:bg-brown-dark transition ease-in py-2 px-4 w-56 sm:w-60">
            Continue Shopping
          </button>
        </a>
      </Link>
    </section>
  )
}

export default Button
