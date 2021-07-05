import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children, title, inverted }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="text-textBlack">
        <Navbar inverted={inverted} />
        {children}
      </main>
    </>
  )
}

export default Layout
