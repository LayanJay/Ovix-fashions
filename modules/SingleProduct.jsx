import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'
import { useCartDispatch } from '../context/cart'
import { MdKeyboardBackspace } from 'react-icons/md'
import { AiOutlineLoading } from 'react-icons/ai'
import commerce from '../lib/commerce'
import useBlurImage from '../hooks/useBlurImage'

const Product = ({ product }) => {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.to('#brownBox', {
      duration: 1.6,
      delay: 0.5,
      width: 0,
      ease: 'expo.out',
    })
      .from(
        '#productText h1',
        { duration: 1, opacity: 0, y: 30, ease: 'power4.out' },
        1.4
      )
      .from(
        '#productText div',
        { duration: 1, opacity: 0, y: 30, stagger: 0.1, ease: 'power4.out' },
        1.5
      )
  }, [])

  const [isAdded, setIsAdded] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [variant, setVariant] = useState({
    groupId: '',
    id: '',
    name: '',
    inventory: null,
  })
  const [variantGrps, setVariantGrps] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => setIsAdded(null), 3500)
    return () => clearTimeout(timer)
  }, [isAdded])

  const router = useRouter()

  const { setCart } = useCartDispatch()

  const handleAddToBagState = ({ cart }) => {
    setCart(cart)
    setIsAdded(true)
    setIsLoading(false)
  }

  const {
    id,
    name,
    description,
    price: { formatted_with_code },
    assets: {
      0: {
        image_dimensions: { width, height },
        url,
      },
      1: { url: sizeChartUrl },
    },
    variant_groups,
  } = product

  const handleGetVariantGroups = (data) => {
    const variants = data.map((variant) => ({
      id: variant.id,
      inventory: variant.inventory,
      option: variant.options,
    }))
    setVariantGrps(variants)
  }

  useEffect(() => {
    commerce.products
      .getVariants(id, {})
      .then((variants) => handleGetVariantGroups(variants.data))
  }, [id])

  const setSize = (id, name) => {
    const variantGrpData = {
      [variant_groups[0].id]: id,
    }

    for (let i = 0; i < variantGrps.length; i++) {
      if (
        JSON.stringify(variantGrps[i].option) === JSON.stringify(variantGrpData)
      ) {
        setVariant({
          ...variant,
          groupId: variant_groups[0].id,
          id: id,
          name: name,
          inventory: variantGrps[i].inventory,
        })
        break
      }
    }
  }

  const handleAddToBag = () => {
    if (variant.name === '' && variant.id === '') {
      alert('You forgot to choose the item size!')
    } else if (variant.inventory === 0) {
      alert('Selected item size is currently not available!')
    } else {
      const variantData = {
        [variant.groupId]: variant.id,
      }

      setIsLoading(true)

      commerce.cart
        .add(id, 1, variantData)
        .then((json) => handleAddToBagState(json))
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
        <div className="relative md:col-span-1 max-w-md md:max-w-lg rounded-full overflow-hidden">
          <Image
            className="rounded-full transform hover:scale-105 transition ease-in"
            src={url}
            alt="image"
            placeholder="blur"
            blurDataURL={useBlurImage(width * 2, height * 2)}
            width={width * 2}
            height={height * 2}
            layout="intrinsic"
            quality={70}
          />
          <div
            id="brownBox"
            className="absolute top-0 right-0 w-full h-full bg-brown-base"
          />
        </div>
        <div
          id="productText"
          className="md:col-span-1 flex flex-col justify-center"
        >
          <h1 className="font-playFair font-bold text-3xl sm:text-4xl md:text-5xl text-brown-dark capitalize leading-8 mb-8 select-none">
            {name}
          </h1>
          <div
            className="product-description select-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="mt-4 mb-5 font-medium text-lg text-brown-dark">
            <a target="_blank" rel="noreferrer" href={sizeChartUrl}>
              <p className="hover:underline">Size chart</p>
            </a>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 mr-4 md:mr-6 mb-5">
            {variant_groups[0]?.options?.map(({ id, name }) => (
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
              className={`flex space-x-2 items-center py-2 px-4 border-2 border-offBrown rounded-full hover:bg-brown-dark hover:text-white font-medium transition ease-in ${
                isLoading ? 'cursor-wait' : ''
              }`}
              disabled={isLoading}
              onClick={handleAddToBag}
            >
              <span>Add to bag</span>
              {isLoading ? <AiOutlineLoading className="animate-spin" /> : ''}
            </button>
            {variant?.inventory === 0 ? (
              <p className="font-semibold text-lg text-soldOut select-none">
                SOLD OUT
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
        {isAdded ? (
          <div
            id="addCart"
            className="fixed right-4 top-24 bg-brown-light border-2 border-brown-dark text-brown-dark font-medium text-lg sm:text-xl text-center max-w-sm rounded-lg shadow-lg py-5 px-8 overflow-hidden"
          >
            Added to the bag
          </div>
        ) : (
          ''
        )}
      </section>
    </>
  )
}

export default Product
