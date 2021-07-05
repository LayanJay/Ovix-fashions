import Layout from '../components/Layout'
import BusinessFeatures from '../modules/homepage/BusinessFeatures'
import HeroSection from '../modules/homepage/HeroSection'
import MainCategories from '../modules/homepage/MainCategories'

const Home = () => {
  return (
    <Layout title="Oviz Fashions | Your Charming Beauty is Our Passion">
      <HeroSection />
      <MainCategories />
      <BusinessFeatures />
    </Layout>
  )
}

export default Home
