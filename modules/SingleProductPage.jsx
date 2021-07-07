import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/Layout/Container'

const Product = ({ product }) => {
  console.log(product)
  const {
    name,
    description,
    price: { formatted_with_code },
    assets: {
      0: {
        image_dimensions: { width, height },
        url,
      },
    },
  } = product

  // const handleAddToBag = () => {
  //   //TODO: Add to bag functionality
  // }

  return (
    <Container>
      <section className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 py-10 sm:py-16 md:py-20 lg:py-24">
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
        <div className="md:col-span-1">
          <h2>{name}</h2>
          <div className="" dangerouslySetInnerHTML={{ __html: description }} />
          <Link href="">
            <a>Size chart</a>
          </Link>
          <div className="grid grid-rows-1 grid-cols-2 gap-4">
            <div className="col-span-1 flex items-center space-x-3">
              <button className="flex justify-center items-center border-2 rounded-full border-offBrown focus:bg-brown-dark focus:text-white hover:bg-brown-light transition ease-in uppercase w-10 h-14">
                s
              </button>
              <button className="flex justify-center items-center border-2 rounded-full border-offBrown focus:bg-brown-dark focus:text-white hover:bg-brown-light transition ease-in uppercase w-10 h-14">
                m
              </button>
              <button className="flex justify-center items-center border-2 rounded-full border-offBrown focus:bg-brown-dark focus:text-white hover:bg-brown-light transition ease-in uppercase w-10 h-14">
                l
              </button>
              <button className="flex justify-center items-center border-2 rounded-full border-offBrown focus:bg-brown-dark focus:text-white hover:bg-brown-light transition ease-in uppercase w-10 h-14">
                xl
              </button>
            </div>
            <div className="col-span-1 flex items-center space-x-3">
              <button className="flex justify-center items-center border-2 rounded-full border-offBrown hover:bg-brown-light transition ease-in uppercase w-10 h-14">
                -
              </button>
              {/* TODO: add the onchange event */}
              <input type="text" disabled value={0} />
              <button className="flex justify-center items-center border-2 rounded-full border-offBrown hover:bg-brown-light transition ease-in uppercase w-10 h-14">
                +
              </button>
            </div>
          </div>
          <div>
            <p>{formatted_with_code}</p>
            <button className="py-2 px-4 border-2 border-offBrown rounded-full hover:bg-brown-dark hover:text-white transition ease-in">
              Add to bag
            </button>
          </div>
        </div>
      </section>

      {/* <div className="px-16 py-8">
        <div className="text-3xl tracking-wide text-brown-dark  font-semibold ">
          <h1>{name}</h1>
        </div>

        <div
          className="py-2 text-md text-textBlack"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <div className="text-brown-dark underline font-semibold py-1">
          <a href="#">Size Chart</a>
        </div>

        <div className="flex items-center">
          <div className="flex my-4">
            <button className="border-2 rounded-full mr-2 px-2 py-2 border-offBrown text-sm tracking-wide hover:bg-offBrown hover:text-offWhite">
              S
            </button>
            <button className="border-2 rounded-full mx-2 px-2 py-2 border-offBrown text-sm tracking-wide hover:bg-offBrown hover:text-offWhite">
              M
            </button>
            <button className="border-2 rounded-full mx-2 px-2 py-2 border-offBrown text-sm tracking-wide hover:bg-offBrown hover:text-offWhite">
              L
            </button>
            <button className="border-2 rounded-full mx-2 px-1 py-2 border-offBrown text-sm tracking-wide hover:bg-offBrown hover:text-offWhite">
              XL
            </button>
          </div>

          <div className="mx-12">
            <button>-</button>
            <input type="text" name="" id="" />
            <button>+</button>
          </div>
        </div>

        <div className="flex items-end ">
          <p className="text-md pb-2 font-semibold">
            {price.formatted_with_symbol}
          </p>
          <div className="mx-4 ">
            <button
              className="border-2 rounded-full px-4 py-2 border-offBrown text-sm tracking-wide hover:bg-offBrown hover:text-offWhite"
              onClick={handleAddToBag}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div> */}
    </Container>
  )
}

export default Product
