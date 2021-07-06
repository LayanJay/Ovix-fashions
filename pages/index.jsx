import Commerce from '../lib/commerce'
import Layout from '../components/Layout'
import BusinessFeatures from '../modules/homepage/BusinessFeatures'
import HeroSection from '../modules/homepage/HeroSection'
import MainCategories from '../modules/homepage/MainCategories'
import FeaturedSection from '../modules/homepage/FeaturedSection'

const Home = ({ featured }) => {
  return (
    <Layout
      title="Oviz Fashions | Your Charming Beauty is Our Passion"
      inverted={true}
    >
      <HeroSection />
      <BusinessFeatures />
      <MainCategories />
      <FeaturedSection products={featured} />
    </Layout>
  )
}

export default Home

export const getServerSideProps = async () => {
  const limit = 4
  const categorySlug = 'featured'

  const featured = await Commerce.products
    .list({
      limit: limit,
      category_slug: [categorySlug],
    })
    .then((response) => response.data)

  return {
    props: {
      featured: featured,
    },
  }
}
