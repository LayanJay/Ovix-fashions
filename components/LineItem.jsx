import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import commerce from '../lib/commerce'
import { useCartDispatch } from '../context/cart'
import { HiPlus, HiMinusSm } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'
import line from '../public/patterns/line.svg'

const LineItem = ({ item }) => {
  const [showQuantity, setShowQuantity] = useState(1)
  const {
    id,
    name,
    media: { source },
    permalink,
    quantity,
    price,
    line_total,
    selected_options,
    variant: { inventory },
  } = item

  const { setCart } = useCartDispatch()

  const handleUpdateCart = ({ cart }) => setCart(cart)

  const increaseQuantity = () => {
    if (quantity < inventory) {
      setShowQuantity((prev) => prev + 1)
      commerce.cart
        .update(id, { quantity: quantity + 1 })
        .then(handleUpdateCart)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setShowQuantity((prev) => prev - 1)
      commerce.cart
        .update(id, { quantity: quantity - 1 })
        .then(handleUpdateCart)
    }
  }

  const romoveItem = () => commerce.cart.remove(id).then(handleUpdateCart)

  // igonre the dependency array
  useEffect(() => {
    setShowQuantity(quantity)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="grid grid-rows-1 grid-cols-3 md:grid-cols-8 gap-4 place-items-center">
        <Link href={`/products/${permalink}`}>
          <a>
            <div className="col-span-1 flex items-center justify-center overflow-hidden">
              <Image
                className="rounded-full filter hover:brightness-100 brightness-90 transition ease-in"
                src={source}
                alt={name}
                layout="intrinsic"
                width={152}
                height={217}
              />
            </div>
          </a>
        </Link>

        <div className="md:col-span-7 col-span-2 grid grid-rows-1 grid-cols-2 md:grid-cols-7 gap-0 md:gap-4">
          <div className="col-span-2 md:col-span-3 flex flex-col justify-center">
            <Link href={`/products/${permalink}`}>
              <a className="text-brown-dark hover:text-brown-semiDark transition ease-in">
                <h3 className="font-playFair font-bold text-lg md:text-2xl">
                  {name}
                </h3>
              </a>
            </Link>

            <div className="flex items-center space-x-2">
              <p className="text-textGray">Size</p>
              {selected_options?.map(({ option_id, option_name }) => (
                <span key={option_id} className="uppercase">
                  {option_name}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 hidden md:flex items-center">
            <p className="font-medium text-brown-dark">
              {price.formatted_with_code}
            </p>
          </div>
          <div className="col-span-2 md:col-span-2 grid grid-rows-1 grid-cols-2 gap-2 md:gap-4">
            <div className="col-span-1 flex items-center my-4">
              <p className="font-medium text-brown-dark">
                {line_total.formatted_with_code}
              </p>
            </div>
            <div className="col-span-1 flex items-center space-x-1 my-4">
              <button
                className="flex items-center justify-center border-2 border-brown-semiDark w-8 h-10 rounded-full hover:bg-brown-semiDark transition ease-in group"
                onClick={decreaseQuantity}
              >
                <HiMinusSm className="text-brown-dark group-hover:text-white transition ease-in h-5 w-5" />
              </button>
              <div className="flex items-center justify-center w-12 md:w-12 h-10 border-2 border-brown-semiDark rounded-lg">
                <p className="text-brown-dark">{showQuantity}</p>
              </div>
              <button
                className="flex items-center justify-center border-2 border-brown-semiDark w-8 h-10 rounded-full hover:bg-brown-semiDark transition ease-in group"
                onClick={increaseQuantity}
              >
                <HiPlus className="text-brown-dark group-hover:text-white transition ease-in h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center md:justify-center mb-4 md:mb-0">
            <button
              className="md:flex items-center justify-center group h-10 w-10 border-2 border-textGray hover:bg-textGray transition ease-in rounded-full hidden"
              onClick={romoveItem}
            >
              <RiCloseLine className="h-5 w-5 text-textGray group-hover:text-white transition ease-in" />
            </button>
            <button
              className="md:hidden border-2 border-textGray text-textBlack hover:bg-textGray hover:text-white transition ease-in rounded-full block py-1 px-3"
              onClick={romoveItem}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image src={line} alt="line" layout="intrinsic" />
      </div>
    </>
  )
}

export default LineItem