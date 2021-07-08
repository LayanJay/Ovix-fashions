import Commerce from '../lib/commerce'
import { useState } from 'react'
import Layout from '../components/Layout'
import Container from '../components/Layout/Container'
import Product from '../components/Product'

const ShopMen = ({ categories, allProducts }) => {
  const [products, setProducts] = useState(allProducts)

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
      animateNavbarOnScroll={true}
    >
      <Container>
        <div className="pt-24 pb-12 font-playFair">
          <div className="pb-4 text-3xl text-brown-dark font-semibold">
            <h1>Shop Men's</h1>
          </div>
          <div className="flex space-x-3 text-sm">
            <div
              className="py-2 px-4 border-2 border-offBrown rounded-full hover:bg-brown-dark hover:text-white font-medium transition ease-in"
              onClick={() => handleFilterProducts(null)}
            >
              <button>All Products</button>
            </div>

            {categories.map((category) => (
              <div
                key={category.id}
                className="py-2 px-4 border-2 border-offBrown rounded-full hover:bg-brown-dark hover:text-white font-medium transition ease-in cursor-pointer"
                onClick={() => handleFilterProducts(category.id)}
              >
                <button name={category.id}>{category.name}</button>
              </div>
            ))}
          </div>
          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

export const getServerSideProps = async () => {
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
  }
}
