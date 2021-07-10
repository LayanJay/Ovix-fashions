import Layout from '../components/Layout'
// import Container from '../components/Layout/Container'
import Message from '../modules/404page/Message'
import Button from '../modules/404page/Button'

const NotFoundPage = () => {
  return (
    <Layout fullFooter={false}>
      <div className="flex justify-center"><Message/></div>
      <div className="flex justify-center py-44"><Button/></div>
      
      
      
    </Layout>
  )
}

export default NotFoundPage
