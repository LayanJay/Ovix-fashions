import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import SmallFooter from './SmallFooter'

const Layout = ({ children, title, invertedNavbar,fullFooter , animateNavbarOnScroll }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
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
