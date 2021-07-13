import Image from 'next/image'
import Link from 'next/link'
import useBlurImage from '../hooks/useBlurImage'

const Product = ({ product, dark }) => {
  const {
    assets: {
      0: { url },
    },
    name,
    permalink,
    price: { formatted_with_code },
  } = product
  return (
    <div
      className={`relative max-w-xs mx-auto ${
        dark ? `bg-brown-dark` : `bg-brown-semiDark`
      } text-white px-3 py-3 rounded-full`}
    >
      <Link href={`products/${permalink}`}>
        <a>
          <div className="rounded-t-full rounded-b-2xl overflow-hidden mb-2">
            <Image
              className="transform hover:scale-105 rounded-b-2xl transition ease-in"
              src={url}
              alt={name}
              layout="intrinsic"
              placeholder="blur"
              blurDataURL={useBlurImage(320, 380)}
              width={320}
              height={380}
              quality={75}
            />
          </div>
        </a>
      </Link>
      <Link href={`products/${permalink}`}>
        <a>
          <h3
            className={`text-center font-playFair font-bold text-xl ${
              dark ? `hover:text-brown-light` : 'hover:text-brown-dark'
            } transition ease-in mb-2 mx-2`}
          >
            {name}
          </h3>
        </a>
      </Link>
      <p className="font-roboto text-center font-semibold text-white mb-4">
        {formatted_with_code}
      </p>
      <div className="flex justify-center items-center mb-3">
        <Link href={`products/${permalink}`}>
          <a>
            <p
              className={`text-center font-roboto text-offWhite border py-1 px-4 rounded-full border-offWhite hover:border-transparent ${
                dark ? `hover:bg-brown-semiDark` : `hover:bg-brown-dark`
              } transition ease-in`}
            >
              View Item
            </p>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Product
