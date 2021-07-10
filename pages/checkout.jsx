import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import Commerce from '../lib/commerce'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Container from '../components/Layout/Container'
import Product from '../components/Product'
import { MdKeyboardBackspace } from 'react-icons/md'
import InputBox from '../components/InputBox'

const ShopMen = ({ categories, allProducts }) => {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.from('#menCategories div', {
      delay: 0.4,
      duration: 0.3,
      stagger: 0.05,
      opacity: 0,
      ease: 'power1.in',
    }).from('#menProducts div', {
      delay: 0.1,
      stagger: 0.05,
      opacity: 0,
      y: 5,
      ease: 'power1.in',
      duration: 0.3,
    })
  }, [])

  const [products, setProducts] = useState(allProducts)

  const router = useRouter()

  const handleFilterProducts = (id) => {
    if (id) {
      const filter = id
      const filteredProducts = allProducts.filter((product) =>
        product.categories.some((category) => category.id === filter)
      )
      setProducts(filteredProducts)
    } else {
      setProducts(allProducts)
    }
  }

  return (
    <Layout
      title="Oviz Fashions | Shop Men's"
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
                <input type="radio" className="mr-2 text-brown-dark" />{' '}
                <label className="text-brown-dark">Cash on Delivery</label>
              </div>

              <div className="font-bold mt-8 mb-4">Delivery Information</div>

              <div className="mt-2 items-center grid grid-cols-2 gap-5 md:gap-10">
                <InputBox
                  text="First Name"
                  placeholder="Enter your first name"
                />
                <InputBox text="Last Name" placeholder="Enter your last name" />
              </div>

              <div className="mt-8">
                <InputBox text="Email" placeholder="Enter your email address" />
              </div>

              <div className="mt-8 items-center grid grid-cols-2 gap-5 md:gap-10">
                <InputBox text="Personal Contact Number" placeholder="Mobile" />
                <InputBox text="Resident Contact Number" placeholder="Home" />
              </div>

              <div className="mt-8">
                <InputBox
                  text="Address"
                  placeholder="Enter your full home address"
                />
              </div>

              <div className="mt-8">
                <InputBox
                  text="Appartment, Suite, etc.."
                  placeholder="optional"
                />
              </div>

              <div className="mt-8 w-1/2">
                <InputBox text="Postal Code" placeholder="Enter postal code" />
              </div>
            </div>

            <div className="w-full flex-1">
              <div className="w-full border-2 border-brown-footer rounded-lg h-16"></div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ShopMen

export const getStaticProps = async () => {
  const categorySlug = 'men'

  const { data } = await Commerce.categories.list()
  const categories = data.filter((category) => category.slug.includes('-men'))

  const { data: allProducts } = await Commerce.products.list({
    category_slug: [categorySlug],
  })

  return {
    props: {
      categories,
      allProducts: allProducts.reverse(),
    },
    // re-validate the site after each and every 4 hours
    revalidate: 14400,
  }
}
