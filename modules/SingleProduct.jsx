import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiPlus, HiMinusSm } from 'react-icons/hi'

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  const {
    name,
    description,
    inventory: { available },
    is: { sold_out },
    price: { formatted_with_code },
    assets: {
      0: {
        image_dimensions: { width, height },
        url,
      },
    },
  } = product

  const increaseQuantity = () => {
    if (quantity < available) setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1)
  }

  // const handleAddToBag = () => {
  //   //TODO: Add to bag functionality
  // }

  return (
    <>
      <section className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-6 place-items-center py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="md:col-span-1 max-w-lg overflow-hidden">
          <Image
            className="rounded-full"
            src={url}
            alt="image"
            width={width * 2}
            height={height * 2}
            layout="intrinsic"
            quality={90}
          />
        </div>
        <div className="md:col-span-1 flex flex-col justify-center">
          <h2 className="font-playFair font-bold text-3xl sm:text-4xl md:text-5xl text-brown-dark capitalize leading-8 mb-8 select-none">
            {name}
          </h2>
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

          <div className="flex items-center justify-start flex-wrap">
            <div className="flex items-center space-x-1 sm:space-x-2 mr-4 md:mr-6 mb-5">
              <button className="flex justify-center items-center border-2 rounded-full font-medium border-offBrown focus:bg-brown-dark focus:text-white hover:bg-brown-base hover:text-white transition ease-in uppercase w-10 h-14">
                s
              </button>
              <button className="flex justify-center items-center border-2 rounded-full font-medium border-offBrown focus:bg-brown-dark focus:text-white hover:bg-brown-base hover:text-white transition ease-in uppercase w-10 h-14">
                m
              </button>
              <button className="flex justify-center items-center border-2 rounded-full font-medium border-offBrown focus:bg-brown-dark focus:text-white hover:bg-brown-base hover:text-white transition ease-in uppercase w-10 h-14">
                l
              </button>
              <button className="flex justify-center items-center border-2 rounded-full font-medium border-offBrown focus:bg-brown-dark focus:text-white hover:bg-brown-base hover:text-white transition ease-in uppercase w-10 h-14">
                xl
              </button>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 mb-5">
              <button
                className="flex justify-center items-center border-2 rounded-full font-medium border-offBrown hover:bg-brown-base hover:text-white transition ease-in uppercase w-10 h-14"
                onClick={decreaseQuantity}
              >
                <HiMinusSm className="text-xl" />
              </button>
              {/* TODO: add the onchange event */}
              <div className="flex items-center justify-center border-2 rounded-lg font-medium border-offBrown w-14 md:w-20 h-14 select-none">
                <p>{quantity}</p>
              </div>
              <button
                className="flex justify-center items-center border-2 rounded-full font-medium border-offBrown hover:bg-brown-base hover:text-white transition ease-in uppercase w-10 h-14"
                onClick={increaseQuantity}
              >
                <HiPlus className="text-xl" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-3 md:space-x-5">
            <p className="font-medium text-xl hover:underline transition ease-in select-none">
              {formatted_with_code}
            </p>
            <button className="py-2 px-4 border-2 border-offBrown rounded-full hover:bg-brown-dark hover:text-white font-medium transition ease-in">
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
