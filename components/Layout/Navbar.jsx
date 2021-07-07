import Image from 'next/image'
import Link from 'next/link'
import ovizWhite from '../../public/assets/oviz-o-white.png'
import ovizBlack from '../../public/assets/oviz-o-black.png'
import bagBlack from '../../public/assets/totebag-black.svg'
import bagWhite from '../../public/assets/totebag-white.svg'
import { useEffect, useState } from 'react'
import gsap from 'gsap'

const Navbar = ({ inverted }) => {
  let animated = false

  const [inv, setInverted] = useState(inverted)

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 100 && !animated) {
        gsap.to('nav', {
          height: 80,
          backgroundColor: '#fff',
          duration: 0.5,
          ease: 'expo.inOut',
        })
        setInverted(false)

        animated = true
      } else if (window.pageYOffset < 100 && animated) {
        gsap.to('nav', {
          height: 112,
          backgroundColor: 'transparent',
          ease: 'expo.inOut',
          duration: 0.5,
        })
        animated = false
        setInverted(true)
      }
    }
  }, [])

  return (
    <nav
      id="nav"
      className="z-50 font-roboto flex flex-row h-28 text-left fixed justify-between py-4 px-6 items-center w-full sm:px-16"
    >
      <div className=" ">
        <Link href="/">
          <a>
            <div className="w-8">
              <Image
                src={inv ? ovizWhite : ovizBlack}
                alt="navbar elements"
                layout="intrinsic"
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="relative">
        <Link href="/checkout">
          <a>
            <div className="">
              <div className="w-9">
                <Image
                  src={inv ? bagWhite : bagBlack}
                  alt="navbar elements"
                  layout="intrinsic"
                />
                <div className="fixed -mt-5 -ml-1 bg-brown-semiDark text-white w-5 h-5 flex items-center justify-center font-bold rounded-full">
                  0
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
