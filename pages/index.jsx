import Layout from '../components/Layout'
import HeroSection from '../modules/homepage/HeroSection'

const Home = () => {
  return (
    <Layout
      title="Oviz Fashions | Your Charming Beauty is Our Passion"
      inverted={true}
    >
      <HeroSection />
    </Layout>
  )
}

export default Home
