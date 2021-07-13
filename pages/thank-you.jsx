import Layout from '../components/Layout'
import Container from '../components/Layout/Container'
import Message from '../modules/thankyoupage/Message'
import Button from '../modules/thankyoupage/Button'

const ThankYouPage = () => {
  return (
    <Layout
      title="Thank You | Oviz Fashions"
      fullFooter={false}
      invertedNavbar={false}
      animateNavbarOnScroll
    >
      <Container>
        <section className="flex flex-col justify-center items-center min-h-screen">
          <Message />
          <Button />
        </section>
      </Container>
    </Layout>
  )
}

export default ThankYouPage
