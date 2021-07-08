import { useState } from 'react'
import Commerce from '../lib/commerce'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Container from '../components/Layout/Container'
import Product from '../components/Product'
import { MdKeyboardBackspace } from 'react-icons/md'

const ShopWomen = ({ categories, allProducts }) => {
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
      title="Oviz Fashions | Shop Women's"
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
              Shop Women&apos;s
            </h1>
          </div>
          <div className="grid grid-cols-2 md:flex md:space-x-3 md:gap-0 gap-3 text-sm sm:text-base">
            <div
              className="flex items-center justify-center py-2 px-4 border-2 border-offBrown rounded-full hover:bg-brown-dark hover:text-white font-medium transition ease-in"
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
          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Product key={product.id} product={product} dark={false} />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ShopWomen

export const getStaticProps = async () => {
  const categorySlug = 'women'

  const { data } = await Commerce.categories.list()
  const categories = data.filter((category) => category.slug.includes('-women'))

  const { data: allProducts } = await Commerce.products.list({
    category_slug: [categorySlug],
  })

  return {
    props: {
      categories,
      allProducts,
    },
    // re-validate the site after each and every 4 hours
    revalidate: 14400,
  }
}
