import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Container from '../../components/Layout/Container'
import { businessFeatures } from '../../lib/data'
import pattern from '../../public/patterns/feature_bottom.png'

const BusinessFeatures = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from('#features div', {
      scrollTrigger: {
        trigger: '#features div',
        start: 'top 75%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: 'power2.out',
    })
  }, [])
  return (
    <Container>
      <section
        id="features"
        className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:gap-5 gap-10 md:py-24 sm:py-16 py-10 select-none"
      >
        {businessFeatures.map(({ id, title, description }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center text-center max-w-xs mx-auto"
          >
            <h3 className="font-playFair font-bold text-textBlack text-xl sm:text-2xl mb-2">
              {title}
            </h3>
            <p className="font-roboto text-textGray mb-6">{description}</p>
            <Image src={pattern} alt="feature bottom" layout="intrinsic" />
          </div>
        ))}
      </section>
    </Container>
  )
}

export default BusinessFeatures
