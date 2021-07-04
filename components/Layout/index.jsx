import Head from 'next/head'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="text-textBlack">{children}</main>
    </>
  )
}

export default Layout
