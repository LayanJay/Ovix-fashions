import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from '../components/Layout'
import Container from '../components/Layout/Container'
import LineItem from '../components/LineItem'
import { useCartState } from '../context/cart'
import { MdKeyboardBackspace } from 'react-icons/md'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import line from '../public/patterns/line.svg'

const CheckoutPage = () => {
  const { line_items, subtotal } = useCartState()

  const router = useRouter()

  if (line_items.length === 0) {
    return (
      <Layout
        title="Oviz Fashions | Shopping Bag"
        invertedNavbar={false}
        fullFooter={false}
      >
        <Container>
          <section className="flex flex-col items-center justify-center py-20 sm:py-24 md:py-32 min-h-screen">
            <h1 className="font-playFair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-brown-dark mb-5">
              Wooops!
            </h1>
            <h2 className="font-medium text-lg sm:text-xl text-center mb-8">
              It looks like your shopping bag is empty.
            </h2>
            <HiOutlineShoppingBag className="text-brown-dark h-20 w-20 mb-5" />
            <p className="text-textGray text-lg sm:text-xl text-center mb-4">
              Let&apos;s add some items to make this page busy.
            </p>
            <div className="flex items-center justify-center flex-wrap space-x-3">
              <button
                className="font-medium py-1 px-4 border-2 border-brown-semiDark hover:border-brown-dark hover:bg-brown-dark hover:text-white rounded-full text-brown-semiDark transition ease-in"
                onClick={() => router.push('/men')}
              >
                Shop Men&apos;s
              </button>
              <button
                className="font-medium py-1 px-4 border-2 border-brown-dark hover:border-brown-semiDark hover:bg-brown-semiDark hover:text-white rounded-full text-brown-dark transition ease-in"
                onClick={() => router.push('/women')}
              >
                Shop Women&apos;s
              </button>
            </div>
          </section>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout
      title="Oviz Fashions | Shopping Bag"
      invertedNavbar={false}
      fullFooter={false}
    >
      <section className="min-h-screen py-24 md:py-32">
        <Container>
          <div className="flex items-center mb-10 space-x-5">
            <div
              className="p-1 md:p-2 border-2 border-brown-dark hover:bg-brown-dark hover:text-white transition ease-in rounded-full cursor-pointer"
              onClick={() => router.back()}
            >
              <MdKeyboardBackspace className="h-8 w-8" />
            </div>
            <h1 className="font-playFair font-bold text-2xl sm:text-3xl md:text-4xl text-brown-dark">
              Shopping Bag
            </h1>
          </div>

          <section className="grid grid-cols-1 gap-5 mb-3">
            {/* table headers */}
            <div className="md:grid md:grid-rows-1 md:grid-cols-8 md:gap-4 hidden">
              <div className="col-span-1 flex items-center justify-center">
                <p className="text-textBlack font-light">Product</p>
              </div>
              <div className="col-span-3" />
              <div className="col-span-1 flex items-center justify-center">
                <p className="text-textBlack font-light">Price</p>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <p className="text-textBlack font-light">Total</p>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <p className="text-textBlack font-light">Qty</p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image src={line} alt="line" layout="intrinsic" />
            </div>
            {/* line items */}
            {line_items.map((item) => (
              <LineItem key={item.id} item={item} />
            ))}
          </section>
          <div className="flex flex-col items-end">
            <p className="font-light text-lg text-brown-dark mb-2 select-none">
              Subtotal
            </p>
            <p className="font-medium text-brown-dark text-xl sm:text-2xl md:text-3xl mb-4 select-none">
              {subtotal.formatted_with_code}
            </p>
            <div className="flex items-center space-x-3">
              <button
                className="py-2 px-5 border-2 border-brown-semiDark hover:border-brown-dark hover:bg-brown-dark hover:text-white rounded-full text-brown-semiDark transition ease-in"
                onClick={() => router.back()}
              >
                Back to Shopping
              </button>
              <button className="py-2 px-5 border-2 hover:border-brown-semiDark border-brown-dark hover:bg-brown-semiDark hover:text-white rounded-full text-brown-dark transition ease-in">
                Checkout
              </button>
              <button className="border-2 border-textGray text-textBlack hover:bg-textGray hover:text-white transition ease-in rounded-full py-2 px-6">
                Clear
              </button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default CheckoutPage
