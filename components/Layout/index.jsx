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
    gsap.to('#layoutApp', { visibility: 'visible' })

    gsap.from('#layoutChildren', {
      duration: 0.3,
      delay: 0.2,
      opacity: 0,
      ease: 'power1.out',
    })
  }, [])
  return (
    <>
      <Head>
        <title>{title || `Oviz Fashions`}</title>
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
      <main id="layoutApp" className="text-textBlack invisible font-roboto">
        <Navbar
          invertedNavbar={invertedNavbar}
          animateNavbarOnScroll={animateNavbarOnScroll}
        />
        <section id="layoutChildren">{children}</section>
        {fullFooter ? <Footer /> : <SmallFooter />}
      </main>
    </>
  )
}

export default Layout
