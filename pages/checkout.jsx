import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import commerce from '../lib/commerce'
import Layout from '../components/Layout'
import Container from '../components/Layout/Container'
import { MdKeyboardBackspace } from 'react-icons/md'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import CartSummary from '../components/CartSummary'

const Checkout = () => {
  const [checkToken, setCheckToken] = useState()

  useEffect(() => {
    commerce.checkout
      .generateTokenFrom('cart', commerce.cart.id())
      .then((response) => setCheckToken(response.id))
  }, [])

  const router = useRouter()

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
                  type="radio"
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

              <div className="mt-2 items-center grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                <InputBox
                  text="First Name"
                  required={true}
                  placeholder="Enter your first name"
                />
                <InputBox
                  text="Last Name"
                  required={true}
                  placeholder="Enter your last name"
                />
              </div>

              <div className="mt-8">
                <InputBox
                  text="Email"
                  required={true}
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mt-8 items-center grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                <InputBox
                  text="Personal Contact Number"
                  required={true}
                  placeholder="Mobile"
                />
                <InputBox text="Resident Contact Number" placeholder="Home" />
              </div>

              <div className="mt-8">
                <InputBox
                  text="Address"
                  placeholder="Enter your full home address"
                  required={true}
                />
              </div>

              <div className="mt-8">
                <InputBox
                  text="Appartment, Suite, etc.."
                  placeholder="optional"
                  required={true}
                />
              </div>

              <div className="mt-8 w-1/2">
                <InputBox
                  text="Postal Code"
                  required={true}
                  placeholder="Enter postal code"
                />
              </div>

              <div className="mt-8 w-40">
                <Button text="Place Order" />
              </div>
            </div>

            <CartSummary checkToken={checkToken} />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Checkout
