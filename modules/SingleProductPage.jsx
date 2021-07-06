//TODOS: proper styling
import Image from 'next/image'
const Product = ({ product }) => {
  const {
    name,
    description,
    price,
    media: { source },
  } = product

  const handleAddToBag = () => {
    //TODO: Add to bag functionality
  }

  return (
    <div className="flex justify-center  my-32 mx-60 font-playFair">
      <div className="rounded-t-full rounded-b-full overflow-hidden">
        <Image src={source} alt="image" width="360" height="540" />
      </div>
      <div className="px-16 py-8">
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
      </div>
    </div>
  )
}

export default Product
