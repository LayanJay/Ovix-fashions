import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import commerce from '../lib/commerce'
import Layout from '../components/Layout'
import Container from '../components/Layout/Container'
import { MdKeyboardBackspace } from 'react-icons/md'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import CartSummary from '../components/CartSummary'
import { useCartDispatch, useCartState } from '../context/cart'

const Checkout = () => {
  const state = useCartState()
  const { setCheckout, setCart } = useCartDispatch()

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact1: '',
    contact2: '',
    address: '',
    townCity: '',
    province: '',
    postal: '',
  })

  useEffect(() => {
    const getCheckoutToken = (response) => {
      setCheckout({
        checkoutToken: response.id,
      })
    }

    if (!state.checkoutToken) {
      commerce.checkout
        .generateTokenFrom('cart', commerce.cart.id())
        .then((response) => getCheckoutToken(response))
    }
  })

  const router = useRouter()

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  const lineItems = state.line_items.map((item) => ({
    [item.id]: {
      quantity: item.quantity,
      variants: {
        [item.variant.id]: item.selected_options[0].option_id,
      },
    },
  }))

  const {
    firstname,
    lastname,
    email,
    contact1,
    contact2,
    address,
    townCity,
    province,
    postal,
  } = formData

  const customer = {
    firstname: firstname,
    lastname: lastname,
    email: email,
  }

  const extra = {
    extr_RyWOwmqMgwnEa2: contact1,
    extr_ypbroExO3w8n4e: contact2,
  }

  const billing = {
    name: `${firstname} ${lastname}`,
    street: address,
    town_city: townCity,
    county_state: province,
    postal_zip_code: postal,
    country: 'Sri Lanka',
  }

  const payment = {
    gateway: 'manual',
    manual: {
      id: 'gway_QlW0RpxRvzJawn',
    },
  }

  // full object
  const checkoutObject = {
    line_items: lineItems,
    discount_code: state.discountCode,
    customer: customer,
    extra_fields: extra,
    billing: billing,
    payment: payment,
  }

  console.log(checkoutObject)

  const handleSuccessRes = async (response) => {
    if (response) {
      await commerce.cart.refresh().then((cart) => setCart(cart))
      setLoading(false)
      return router.push('/thank-you')
    }
  }

  const handleError = (error) => {
    if (error) {
      setError(error)
      console.log(error)
      setLoading(false)
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    commerce.checkout
      .capture(state.checkoutToken, checkoutObject)
      .then((response) => handleSuccessRes(response))
      .catch((error) => handleError(error))
  }

  useEffect(() => {
    const timer = setTimeout(() => setError(null), 3500)
    return () => clearTimeout(timer)
  }, [error])

  return (
    <Layout
      title="Oviz Fashions | Payment &amp; Delivery"
      inverted={false}
      fullFooter={false}
    >
      <Container>
        <div className="py-24 md:py-32">
          <div className="flex items-center mb-10 space-x-5">
            <div
              className="p-1 md:p-2 border-2 border-brown-dark hover:bg-brown-dark hover:text-white transition ease-in rounded-full cursor-pointer"
              onClick={() => router.back()}
            >
              <MdKeyboardBackspace className="h-8 w-8" />
            </div>
            <h1 className="font-playFair font-bold text-2xl sm:text-3xl md:text-4xl text-brown-dark">
              Payment &amp; Delivery
            </h1>
          </div>

          <div className="w-full flex flex-col-reverse lg:flex-row flex-1">
            <div className="lg:pr-20 flex-1">
              <div className="font-bold">Payment Options</div>

              <div className="mt-2 flex items-center">
                <input
                  id="paymentOption"
                  readOnly
                  type="radio"
                  checked={true}
                  className="mr-2 text-brown-semiDark cursor-pointer"
                />{' '}
                <label
                  htmlFor="paymentOption"
                  className="text-brown-dark cursor-pointer"
                >
                  Cash on Delivery
                </label>
              </div>

              <div className="font-bold mt-8 mb-4">Delivery Information</div>
              <form onSubmit={handleFormSubmit}>
                <div className="mt-2 items-center grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                  <InputBox
                    text="First Name"
                    name="firstname"
                    required={true}
                    onChange={handleFormChange}
                    placeholder="Enter your first name"
                  />
                  <InputBox
                    text="Last Name"
                    name="lastname"
                    required={true}
                    onChange={handleFormChange}
                    placeholder="Enter your last name"
                  />
                </div>

                <div className="mt-8">
                  <InputBox
                    type="email"
                    text="Email"
                    name="email"
                    required={true}
                    onChange={handleFormChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mt-8 items-center grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                  <InputBox
                    type="tel"
                    text="Personal Contact Number"
                    name="contact1"
                    required={true}
                    onChange={handleFormChange}
                    placeholder="Mobile"
                  />
                  <InputBox
                    type="tel"
                    text="Resident Contact Number"
                    onChange={handleFormChange}
                    placeholder="Home"
                    name="contact2"
                  />
                </div>

                <div className="mt-8">
                  <InputBox
                    text="Address"
                    name="address"
                    onChange={handleFormChange}
                    placeholder="Enter your full home address"
                    required={true}
                  />
                </div>

                <div className="mt-8 items-center grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                  <InputBox
                    text="Town City"
                    name="townCity"
                    onChange={handleFormChange}
                    placeholder="Town City"
                    required
                  />
                  <InputBox
                    text="Province"
                    name="province"
                    onChange={handleFormChange}
                    placeholder="Province"
                    required
                  />
                </div>

                <div className="mt-8 w-1/2">
                  <InputBox
                    text="Postal Code"
                    name="postal"
                    required={true}
                    onChange={handleFormChange}
                    placeholder="Enter postal code"
                  />
                </div>

                <div className="mt-8 w-40">
                  <Button
                    text="Place Order"
                    type="submit"
                    isLoading={loading}
                  />
                </div>
              </form>
            </div>

            <CartSummary checkToken={state.checkoutToken} />
          </div>
          {error ? (
            <div
              id="addCart"
              className="fixed right-4 top-24 bg-brown-light border-2 border-brown-dark text-brown-dark font-medium text-lg sm:text-xl text-center max-w-sm rounded-lg shadow-lg py-5 px-8 overflow-hidden"
            >
              Something went wrong! Try again later
            </div>
          ) : (
            ''
          )}
        </div>
      </Container>
    </Layout>
  )
}

export default Checkout
