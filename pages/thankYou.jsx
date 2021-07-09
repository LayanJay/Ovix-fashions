import Layout from '../components/Layout'
import Container from '../components/Layout/Container'
import Message from '../modules/thankyoupage/Message'
import Button from '../modules/thankyoupage/Button'

const ThankYouPage = () => {
  return (
    <Layout title="Oviz Fashions | Thank You" fullFooter={false}>
      <Container>
      <div className="pt-48 pl-32 py-48">
      <Message/>
      <div className="flex justify-center pb-16">
        <Button/>
      </div>      
      </div>
      </Container>
      
    </Layout>
  )
}

export default ThankYouPage

