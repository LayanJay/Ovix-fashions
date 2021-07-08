import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCartDispatch } from '../context/cart'
import { MdKeyboardBackspace } from 'react-icons/md'
import commerce from '../lib/commerce'

const Product = ({ product }) => {
  const [variant, setVariant] = useState({
    groupId: '',
    id: '',
    name: '',
  })

  const router = useRouter()

  const { setCart } = useCartDispatch()

  const {
    id,
    name,
    description,
    is: { sold_out },
    price: { formatted_with_code },
    assets: {
      0: {
        image_dimensions: { width, height },
        url,
      },
    },
    variant_groups,
  } = product

  const setSize = (id, name) => {
    setVariant({
      ...variant,
      groupId: variant_groups[0].id,
      id: id,
      name: name,
    })
  }

  const handleAddToBag = () => {
    if (variant.name === '' && variant.id === '') {
      alert('You forgot to choose the item size!')
    } else {
      const variantData = {
        [variant.groupId]: variant.id,
      }

      commerce.cart.add(id, variantData).then(({ cart }) => setCart(cart))
    }
  }

  return (
    <>
      <section className="relative grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-6 place-items-center py-20 min-h-screen">
        <div
          className="absolute z-10 left-0 top-24 md:top-32 p-1 md:p-2 border-2 border-brown-dark hover:bg-brown-dark hover:text-white transition ease-in rounded-full cursor-pointer"
          onClick={() => router.back()}
        >
          <MdKeyboardBackspace className="h-8 w-8" />
        </div>
        <div className="md:col-span-1 max-w-md md:max-w-lg rounded-full overflow-hidden">
          <Image
            className="rounded-full transform hover:scale-105 transition ease-in"
            src={url}
            alt="image"
            width={width * 2}
            height={height * 2}
            layout="intrinsic"
            quality={90}
          />
        </div>
        <div className="md:col-span-1 flex flex-col justify-center">
          <h1 className="font-playFair font-bold text-3xl sm:text-4xl md:text-5xl text-brown-dark capitalize leading-8 mb-8 select-none">
            {name}
          </h1>
          <div
            className="product-description select-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {/* TODO: link the size chart pdf */}
          <div className="mt-4 mb-5 font-medium text-lg text-brown-dark">
            <Link href="">
              <a className="hover:underline">Size chart</a>
            </Link>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 mr-4 md:mr-6 mb-5">
            {variant_groups[0].options?.map(({ id, name }) => (
              <button
                key={id}
                className={`flex justify-center items-center border-2 rounded-full font-medium ${
                  variant.name === name ? `bg-brown-dark text-white` : ``
                } focus:bg-brown-dark border-brown-dark hover:bg-brown-semiDark hover:text-white transition ease-in uppercase w-10 h-14`}
                onClick={() => setSize(id, name)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-3 md:space-x-5">
            <p className="font-medium text-xl hover:underline transition ease-in select-none">
              {formatted_with_code}
            </p>
            <button
              className="py-2 px-4 border-2 border-offBrown rounded-full hover:bg-brown-dark hover:text-white font-medium transition ease-in"
              onClick={handleAddToBag}
            >
              Add to bag
            </button>
            {sold_out ? (
              <p className="font-semibold text-lg text-soldOut select-none">
                SOLD OUT
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
