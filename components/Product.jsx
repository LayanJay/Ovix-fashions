//TODOS: proper styling

const Product = ({ product }) => {
  const {
    name,
    description,
    price,
    media: { source },
  } = product
  return (
    <div className="flex pb-20 px-40 pt-32">
      <div className="mr-8">
        <img src={source} alt="image" width="420" height="630" />
      </div>
      <div className="p-8">
        <div className="font-bold text-xl">
          <h1>{name}</h1>
        </div>

        <div
          className="py-4 text-sm text text-gray-800"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <a href="#">Size Chart</a>
        <div className="flex">
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>

        <button>-</button>

        <input type="text" name="" id="" />
        <button>+</button>

        <p>{price.formatted_with_symbol}</p>
        <button>Add to bag</button>
      </div>
    </div>
  )
}

export default Product
