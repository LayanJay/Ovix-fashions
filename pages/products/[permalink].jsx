const SingleProductPage = ({permalink}) => {
 return ( <h1>{permalink}</h1> );
}

export const getServerSideProps = (context) => {
 const permalink = context.query



 return{
  props:{
   permalink
  }
 }
}

 
export default SingleProductPage;