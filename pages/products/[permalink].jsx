import commerce from '../../lib/commerce'
import Product from '../../modules/SingleProductPage'
import Layout from '../../components/Layout'
const SingleProductPage = ({ product }) => {
  return (
    <>
      <Layout
        title="Oviz Fashions | Single Product"
        inverted={false}
        fullFooter={false}
      >
        <Product product={product} />
      </Layout>

      {/* <Product product={product} />
      <SmallFooter></SmallFooter> */}
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
