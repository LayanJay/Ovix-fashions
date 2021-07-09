import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import SmallFooter from './SmallFooter'

const Layout = ({
  children,
  title,
  image,
  invertedNavbar,
  fullFooter,
  animateNavbarOnScroll,
}) => {
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
      <main className="text-textBlack font-roboto">
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
