import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import SmallFooter from './SmallFooter'

const Layout = ({ children, title, inverted, fullFooter }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="text-textBlack font-roboto relative min-h-screen">
        <Navbar inverted={inverted} />
        {children}
        {fullFooter ? <Footer /> : <SmallFooter />}
      </main>
    </>
  )
}

export default Layout
