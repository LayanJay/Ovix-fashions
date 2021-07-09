import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import SmallFooter from './SmallFooter'
import { gsap } from 'gsap'
import { useEffect } from 'react'

const Layout = ({
  children,
  title,
  image,
  invertedNavbar,
  fullFooter,
  animateNavbarOnScroll,
}) => {
  // to remove the initial flashing
  useEffect(() => {
    gsap.to('#app', { visibility: 'visible' })
  }, [])
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <meta name="image" content={`${image || `/assets/favicon.png`}`} />
        <meta property="og:title" content={`${title || `Oviz Fashions`}`} />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content={`${image || `/assets/favicon.png`}`}
        />
        <meta name="twitter:title" content={`${title || `Oviz Fashions`}`} />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content={`${image || `/assets/favicon.png`}`}
        />
      </Head>
      <main id="app" className="text-textBlack invisible font-roboto">
        <Navbar
          invertedNavbar={invertedNavbar}
          animateNavbarOnScroll={animateNavbarOnScroll}
        />
        {children}
        {fullFooter ? <Footer /> : <SmallFooter />}
      </main>
    </>
  )
}

export default Layout
