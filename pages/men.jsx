import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import Commerce from '../lib/commerce'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Container from '../components/Layout/Container'
import Product from '../components/Product'
import { MdKeyboardBackspace } from 'react-icons/md'

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
      invertedNavbar={false}
      animateNavbarOnScroll
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
              Shop Men&apos;s
            </h1>
          </div>
          <div
            id="menCategories"
            className="grid grid-cols-2 md:flex md:space-x-3 md:gap-0 gap-3 text-sm sm:text-base"
          >
            <div
              className="flex items-center justify-center py-2 px-4 border-2 border-offBrown rounded-full hover:bg-brown-dark hover:text-white font-medium transition ease-in cursor-pointer"
              onClick={() => handleFilterProducts(null)}
            >
              <button>All Products</button>
            </div>

            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-center py-2 px-4 border-2 border-offBrown rounded-full hover:bg-brown-dark hover:text-white font-medium transition ease-in cursor-pointer"
                onClick={() => handleFilterProducts(category.id)}
              >
                <button name={category.id}>{category.name}</button>
              </div>
            ))}
          </div>
          <div
            id="menProducts"
            className="pt-10 grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {products.map((product) => (
              <Product key={product.id} product={product} dark={true} />
            ))}
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
