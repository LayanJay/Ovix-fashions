import Image from 'next/image'
import Container from '../../components/Layout/Container'
import Product from '../../components/Product'
import pattern from '../../public/patterns/feature_bottom.png'

const LatestSection = ({ products }) => {
  return (
    <Container>
      <section className="py-10">
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="font-playFair text-textBlack text-center font-bold text-5xl md:text-5xl lg:text-6xl leading-normal tracking-wide mb-4">
            Latest
          </h2>
          <Image src={pattern} alt="feature bottom" layout="intrinsic" />
        </div>

        <section className="grid grid-cols-1 grid-rows-1 lg:grid-cols-4 sm:grid-cols-2 gap-5 mb-10">
          {products.map((product) => (
            <Product key={product.id} product={product} dark />
          ))}
        </section>
      </section>
    </Container>
  )
}

export default LatestSection
