import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, title, invertedNavbar, animateNavbarOnScroll }) => {
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
        <Footer />
      </main>
    </>
  )
}

export default Layout
