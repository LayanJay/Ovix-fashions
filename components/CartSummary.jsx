import { useState, useEffect } from 'react'
import commerce from '../lib/commerce'
import InputBox from './InputBox'
import Button from './Button'
import { useCartState, useCartDispatch } from '../context/cart'

const CartSummary = ({ checkToken }) => {
  const { line_items, subtotal, live, amount_saved } = useCartState()
  const { setCheckout } = useCartDispatch()

  const [loading, setLoading] = useState(false)
  const [isDiscounted, setIsDiscounted] = useState(null)
  const [formData, setFormData] = useState({
    discountCode: '',
  })

  console.log(live)

  useEffect(() => {
    const timer = setTimeout(() => setIsDiscounted(null), 3500)
    return () => clearTimeout(timer)
  }, [isDiscounted])

  const handleCheckData = ({ valid, amount_saved, live }) => {
    setLoading(false)
    if (valid) {
      setIsDiscounted(true)
      setCheckout({
        live,
        amount_saved,
      })
    } else {
      alert('The discount code you entered is invalid')
    }
  }

  const handleDiscountCode = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    })
  }

  const handleDiscountCodeSubmit = (e) => {
    e.preventDefault()

    if (!checkToken) {
      alert("You don't have a checkout token")
    } else if (!formData.discountCode) {
      alert('You forgot to enter the discount code')
    } else {
      setLoading(true)

      commerce.checkout
        .checkDiscount(checkToken, {
          code: formData.discountCode,
        })
        .then((response) => handleCheckData(response))
    }
  }

  return (
    <div className="w-full flex-1 my-8">
      <div className="w-full border-2 border-brown-dark p-6 rounded-lg">
        {line_items.map((item) => (
          <div
            className="grid grid-cols-2 items-center justify-center"
            key={item.id}
          >
            <div className="font-playFair font-bold text-lg md:text-xl text-brown-dark my-3">
              {item.product_name}
            </div>
            <div className="text-right text-lg font-bold text-brown-dark">
              {item.line_total.formatted_with_code}
            </div>
          </div>
        ))}

        <hr className="border-none bg-brown-dark h-0.5 my-3" />

        <div className="flex items-end justify-center m-1 sm:m-4">
          <InputBox
            placeholder="Discount Code"
            name="discountCode"
            onChange={handleDiscountCode}
          />

          <div className="ml-2 sm:ml-8 w-40">
            <Button
              isLoading={loading}
              type="submit"
              text="Redeem"
              onClick={handleDiscountCodeSubmit}
            />
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
            {amount_saved?.formatted_with_code || `-0 LKR`}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center justify-center mt-8">
          <div className="font-bold text-2xl text-brown-dark">Total</div>
          <div className="text-right text-2xl font-bold text-brown-dark">
            {live?.total.formatted_with_code || subtotal?.formatted_with_code}
          </div>
        </div>
      </div>
      {isDiscounted ? (
        <div
          id="addCart"
          className="fixed right-4 top-24 bg-brown-light border-2 border-brown-dark text-brown-dark font-medium text-lg sm:text-xl text-center max-w-sm rounded-lg shadow-lg py-5 px-8 overflow-hidden"
        >
          Discount code redeemed
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default CartSummary
