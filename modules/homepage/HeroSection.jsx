import Image from 'next/image'
import Container from '../../components/Layout/Container'
import heroImage from '../../public/samples/hero-image.png'
import mouse from '../../public/samples/mouse.png'
import { gsap } from 'gsap'
import { useEffect } from 'react'

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.6 })

    tl.from('#titles h2', {
      opacity: 0,
      y: -10,
      stagger: 0.1,
      ease: 'expo.out',
      duration: 0.5,
    })
      .to(
        '#header1',
        { y: 70, opacity: 0, duration: 1.1, ease: 'power3.out' },
        'start'
      )
      .to(
        '#header3',
        { y: -70, opacity: 0, duration: 1.1, ease: 'power3.out' },
        'start'
      )
      .to('#header2', { duration: 0.8, scale: 1.5, ease: 'power3.inOut' }, 1.2)
      .to(
        '#tagline',
        { duration: 0.6, y: -50, opacity: 1, ease: 'power3.out' },
        1.5
      )
  }, [])

  return (
    <section
      style={{ backgroundImage: 'url(/samples/background.png)' }}
      className="bg-cover bg-center select-none text-white md:pt-20 sm:pt-24 pt-28 mb-10"
    >
      <Container>
        <section className="relative flex flex-col items-center">
          <div className="max-w-lg">
            <Image
              src={heroImage}
              alt="hero section"
              layout="intrinsic"
              placeholder="empty"
              quality={70}
            />
          </div>
          <div
            id="titles"
            className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-5"
          >
            <h2
              id="header1"
              className="font-playFair font-bold text-brown-light text-6xl md:text-7xl"
            >
              OVIZ
            </h2>
            <h2
              id="header2"
              className="font-playFair font-bold text-brown-light text-6xl md:text-7xl"
            >
              OVIZ
            </h2>
            <h2
              id="header3"
              className="font-playFair font-bold text-brown-light text-6xl md:text-7xl"
            >
              OVIZ
            </h2>
          </div>
          <div className="absolute bottom-10 md:bottom-28 max-w-sm">
            <p
              id="tagline"
              className="font-playFair text-brown-light text-2xl sm:text-3xl text-center font-bold opacity-0"
            >
              Your Charming Smile is our Passion
            </p>
          </div>
          <div id="mouse" className="absolute bottom-4">
            <Image
              src={mouse}
              alt="mouse icon"
              layout="intrinsic"
              placeholder="empty"
              quality={70}
            />
          </div>
        </section>
      </Container>
    </section>
  )
}

export default HeroSection
