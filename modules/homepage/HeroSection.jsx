import Image from 'next/image'
import Container from '../../components/Layout/Container'
import heroImage from '../../public/samples/hero-image.png'
import mouse from '../../public/samples/mouse.png'

const HeroSection = () => {
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
          <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-5">
            <h2 className="font-playFair font-bold text-brown-light text-6xl md:text-7xl">
              OVIZ
            </h2>
            <h2 className="font-playFair font-bold text-brown-light text-6xl md:text-7xl">
              OVIZ
            </h2>
            <h2 className="font-playFair font-bold text-brown-light text-6xl md:text-7xl">
              OVIZ
            </h2>
          </div>
          <div className="absolute bottom-4">
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
