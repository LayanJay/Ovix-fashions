import Layout from '../components/Layout'
// import Container from '../components/Layout/Container'
import Message from '../modules/thankyoupage/Message'
import Button from '../modules/thankyoupage/Button'

const ThankYouPage = () => {
  return (
    <Layout title="Oviz Fashions | Thank You" fullFooter={false}>
      <Message/>
      <Button/>
    </Layout>
  )
}

export default ThankYouPage

