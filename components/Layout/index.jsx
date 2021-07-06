import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import SmallFooter from './SmallFooter'

const Layout = ({ children, title, inverted, fullFooter }) => {
  const [isFullFooter, setIsFullFooter] = useState(true)

  useEffect(() => {
    setIsFullFooter(fullFooter)
  }, [fullFooter])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="text-textBlack font-roboto relative min-h-screen">
        <Navbar inverted={inverted} />
        {children}
        {isFullFooter ? <Footer /> : <SmallFooter />}
      </main>
    </>
  )
}

export default Layout
