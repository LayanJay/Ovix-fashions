import Image from 'next/image'
import Link from 'next/link'
import { useCartState } from '../../context/cart'
import ovizWhite from '../../public/assets/oviz-o-white.png'
import ovizBlack from '../../public/assets/oviz-o-black.png'
import bagBlack from '../../public/assets/totebag-black.svg'
import bagWhite from '../../public/assets/totebag-white.svg'
import { useEffect, useState } from 'react'
import gsap from 'gsap'

const Navbar = ({ invertedNavbar, animateNavbarOnScroll = false }) => {
  const [inverted, setInverted] = useState(true)

  const { total_unique_items } = useCartState()

  useEffect(() => {
    let animated = false
    window.onscroll = () => {
      if (animateNavbarOnScroll) {
        if (window.pageYOffset > 10 && !animated) {
          gsap.to('nav', {
            height: 80,
            backgroundColor: '#fff',
            duration: 0.5,
            boxShadow: '0px 0px 18px 1px rgba(0 0 0 / 25%)',
            ease: 'expo.out',
          })

          setInverted(false)
          animated = true
        } else if (window.pageYOffset < 10 && animated) {
          gsap.to('nav', {
            height: 112,
            backgroundColor: 'transparent',
            ease: 'expo.out',
            boxShadow: '0px 0px 0px 0px rgba(0 0 0 / 0%)',
            duration: 0.5,
          })

          animated = false
          setInverted(true)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav
      id="nav"
      className="z-50 font-roboto flex flex-row h-28 text-left fixed justify-between py-4 px-6 items-center w-full sm:px-16"
    >
      <div className=" ">
        <Link href="/">
          <a>
            <div className="w-8 pt-1">
              <Image
                src={
                  !invertedNavbar ? ovizBlack : inverted ? ovizWhite : ovizBlack
                }
                alt="navbar elements"
                layout="intrinsic"
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="relative">
        <Link href="/bag">
          <a>
            <div className="">
              <div className="w-9">
                <Image
                  src={
                    !invertedNavbar ? bagBlack : inverted ? bagWhite : bagBlack
                  }
                  alt="navbar elements"
                  layout="intrinsic"
                />
                <div className="fixed -mt-5 -ml-1 bg-brown-semiDark text-white w-5 h-5 flex items-center justify-center font-bold rounded-full">
                  {total_unique_items || `0`}
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
