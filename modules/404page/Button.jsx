import Link from 'next/link'

const Button = () => {
  return (
    <section>
      <Link href="/">
        <a>
          <button className="font-medium text-brown-dark hover:text-white rounded-full border-brown-dark border-2 hover:bg-brown-dark transition ease-in py-2 px-4 w-40 sm:w-44">
            Go Back
          </button>
        </a>
      </Link>
    </section>
  )
}

export default Button
