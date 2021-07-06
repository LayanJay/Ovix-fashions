
import commerce from '../../lib/commerce'
import Product from '../../components/Product'
const SingleProductPage = ({ product }) => {
  return <Product product={product} />
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
