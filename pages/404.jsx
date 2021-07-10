import Layout from '../components/Layout'
import Message from '../modules/404page/Message'
import Button from '../modules/404page/Button'

const NotFoundPage = () => {
  return (
    <Layout fullFooter={false}>
      <section className="flex flex-col justify-center items-center min-h-screen">
        <Message />
        <Button />
      </section>
    </Layout>
  )
}

export default NotFoundPage
