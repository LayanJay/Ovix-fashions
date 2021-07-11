import InputBox from './InputBox'
import Button from './Button'
import { useCartState } from '../context/cart'

const CartSummary = () => {
  const { line_items, subtotal } = useCartState()

  return (
    <div className="w-full flex-1 my-8">
      <div className="w-full border-2 border-brown-dark p-6 rounded-lg">
        {line_items.map((item) => (
          <div
            className="grid grid-cols-2 items-center justify-center"
            key={item.id}
          >
            <div className="font-playFair font-bold text-lg md:text-xl text-brown-dark my-3">
              {item.name}
            </div>
            <div className="text-right text-lg font-bold text-brown-dark">
              {item.line_total.formatted_with_code}
            </div>
          </div>
        ))}

        <hr className="border-none bg-brown-dark h-0.5 my-3" />

        <div className="flex items-end justify-center m-1 sm:m-4">
          <InputBox placeholder="Discount Code" />

          <div className="ml-2 sm:ml-8 w-40">
            <Button text="Redeem" />
          </div>
        </div>

        <hr className="border-none bg-brown-dark h-0.5 mt-6" />

        <div className="grid grid-cols-2 items-center justify-center mt-4">
          <div className="font-bold text-lg text-brown-dark">Subtotal</div>
          <div className="text-right text-lg font-bold text-brown-dark">
            {subtotal?.formatted_with_code}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center justify-center">
          <div className="font-bold text-lg text-brown-dark">Discount</div>
          <div className="text-right text-lg font-bold text-brown-dark">
            -0 LKR
          </div>
        </div>

        <div className="grid grid-cols-2 items-center justify-center mt-8">
          <div className="font-bold text-2xl text-brown-dark">Total</div>
          <div className="text-right text-2xl font-bold text-brown-dark">
            {subtotal?.formatted_with_code} LKR
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
