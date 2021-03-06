import Commerce from '../lib/commerce'
import Image from 'next/image'
import Layout from '../components/Layout'
import BusinessFeatures from '../modules/homepage/BusinessFeatures'
import HeroSection from '../modules/homepage/HeroSection'
import MainCategories from '../modules/homepage/MainCategories'
import FeaturedSection from '../modules/homepage/FeaturedSection'
import LatestSection from '../modules/homepage/LatestSection'
import Container from '../components/Layout/Container'

const Home = ({ featured, latest }) => {
  return (
    <Layout
      title="Ovix Fashions | Your Charming Beauty is Our Passion"
      fullFooter={true}
      invertedNavbar
      animateNavbarOnScroll={true}
    >
      <HeroSection />
      <BusinessFeatures />
      <MainCategories />
      <Container>
        <Image
          src="/patterns/divider_pattern.png"
          alt="divider"
          layout="intrinsic"
          width={1597}
          height={37.07}
        />
      </Container>
      <FeaturedSection products={featured} />
      <Container>
        <Image
          src="/patterns/divider_pattern.png"
          alt="divider"
          layout="intrinsic"
          width={1597}
          height={37.07}
        />
      </Container>
      <LatestSection products={latest} />
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const limit = 4
  const categorySlug = 'featured'

  const featured = await Commerce.products
    .list({
      limit: limit,
      category_slug: [categorySlug],
    })
    .then((response) => response.data)

  const latest = await Commerce.products
    .list()
    .then((response) => response.data)

  return {
    props: {
      featured,
      latest: latest.reverse(),
    },
    // re-validate the site after each and every 4 hours
    revalidate: 14400,
  }
}
