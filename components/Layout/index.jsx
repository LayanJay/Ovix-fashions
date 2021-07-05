import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, title, inverted }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="text-textBlack">
        <Navbar inverted={inverted} />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
