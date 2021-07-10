import Layout from '../components/Layout'
import Message from '../modules/404page/Message'
import Button from '../modules/404page/Button'
import Container from '../components/Layout/Container'

const NotFoundPage = () => {
  return (
    <Layout title="404 Not found | Oviz fashions" fullFooter={false}>
      <Container>
        <section className="flex flex-col justify-center items-center min-h-screen">
          <Message />
          <Button />
        </section>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
