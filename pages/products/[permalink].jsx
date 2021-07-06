import commerce from '../../lib/commerce'
import Product from '../../components/Product'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import Layout from '../../components/Layout'
const SingleProductPage = ({ product }) => {
  return (
    <>
      <Layout title="Oviz Fashions | Single Product" inverted={false}>
        <Product product={product} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { permalink } = context.query
  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  })
  return {
    props: {
      product,
    },
  }
}

export default SingleProductPage
