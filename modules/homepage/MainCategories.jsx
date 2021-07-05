import Image from 'next/image'
import Link from 'next/link'
import Container from '../../components/Layout/Container'
import shopMens from '../../public/samples/shop_men.png'
import shopWomens from '../../public/samples/shop_women.png'

const MainCategories = () => {
  return (
    <Container>
      <section className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 gap-8 py-10">
        <div className="relative sm:col-span-1 group">
          <Link href="/men">
            <a>
              <div className="sm:max-w-xl sm:w-auto w-72 mx-auto">
                <Image
                  className="group-hover:opacity-90 transition ease-in"
                  src={shopMens}
                  alt="shop mens"
                  layout="intrinsic"
                  quality={80}
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h2 className="font-playFair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-normal tracking-wide mb-6">
                  Shop Men&apos;s
                </h2>
                <p className="font-roboto text-xl sm:text-2xl md:text-3xl">
                  Discover Now
                </p>
              </div>
            </a>
          </Link>
        </div>

        <Link href="/women">
          <a>
            <div className="relative sm:col-span-1 group">
              <div className="sm:max-w-xl sm:w-auto w-72 mx-auto">
                <Image
                  className="group-hover:opacity-90 transition ease-in"
                  src={shopWomens}
                  alt="shop womens"
                  layout="intrinsic"
                  quality={80}
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h2 className="font-playFair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-normal tracking-wide mb-6">
                  Shop Women&apos;s
                </h2>
                <p className="font-roboto text-xl sm:text-2xl md:text-3xl">
                  Discover Now
                </p>
              </div>
            </div>
          </a>
        </Link>
      </section>
    </Container>
  )
}

export default MainCategories