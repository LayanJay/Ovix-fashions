import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Container from '../../components/Layout/Container'
import Product from '../../components/Product'
import pattern from '../../public/patterns/feature_bottom.png'

const LatestSection = ({ products }) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from('#latestTitle', {
      scrollTrigger: {
        trigger: '#latestTitle',
        start: 'top 80%',
      },
      opacity: 0,
      y: 20,
      ease: 'power3.out',
      duration: 1,
      delay: 0.3,
    })

    gsap.from('#latestProducts div', {
      scrollTrigger: {
        trigger: '#latestProducts div',
        start: 'top 80%',
      },
      stagger: 0.05,
      opacity: 0,
      y: 10,
      ease: 'power1.in',
      duration: 0.4,
    })
  }, [])
  return (
    <Container>
      <section className="py-10">
        <div
          id="latestTitle"
          className="flex flex-col items-center justify-center mb-10"
        >
          <h2 className="font-playFair text-textBlack text-center font-bold text-5xl md:text-5xl lg:text-6xl leading-normal tracking-wide mb-4">
            Latest
          </h2>
          <Image src={pattern} alt="feature bottom" layout="intrinsic" />
        </div>

        <section
          id="latestProducts"
          className="grid grid-cols-1 grid-rows-1 lg:grid-cols-4 sm:grid-cols-2 gap-5 mb-10"
        >
          {products.slice(0, 4).map((product) => (
            <Product key={product.id} product={product} dark />
          ))}
        </section>
      </section>
    </Container>
  )
}

export default LatestSection
