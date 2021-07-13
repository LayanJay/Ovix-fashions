import commerce from '../../lib/commerce'
import SingleProduct from '../../modules/SingleProduct'
import Container from '../../components/Layout/Container'
import Layout from '../../components/Layout'

const SingleProductPage = ({ product }) => {
  return (
    <Layout
      title={`${product.name} | Oviz Fashions`}
      image={product.media.source}
      invertedNavbar={false}
      animateNavbarOnScroll
      fullFooter={false}
    >
      <Container>
        <SingleProduct product={product} />
      </Container>
    </Layout>
  )
}

export default SingleProductPage

export const getStaticProps = async ({ params }) => {
  const { permalink } = params
  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  })
  return {
    props: {
      product,
    },
    // re-validate the site after each and every 4 hours
    revalidate: 14400,
  }
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list()

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  }
}
