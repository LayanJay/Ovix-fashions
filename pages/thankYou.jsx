import Layout from '../components/Layout'
import Container from '../components/Layout/Container'

const ThankYouPage = () => {
  //Function to check button activity
  const handleContinueShopping = () => {
    console.log('Continue shopping')
  }

  return (
    <Layout title="Oviz Fashions | Thank You">
      <Container>
        {/Navigation bar goes here./}
        <Navbar></Navbar>
        <section className=''>
          <h1 className='congrats'>Congratulations!</h1>
          <h3>Your order has been successfully placed</h3>
          <p>We have sent you an email.</p>
          <h4>Thank you for choosing Ociz fashions! We truly appreciate the trust you have placed in us.</h4>
          <button className='' onClick={handleContinueShopping}>Continue Shopping</button>
        {/Footer goes here/}
        <footer></footer>
        </section>
      </Container>
    </Layout>
  )
}

export default ThankYouPage
