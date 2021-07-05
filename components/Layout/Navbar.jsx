import ovizWhite from '../../public/assets/oviz-o-white.png'
import ovizBlack from '../../public/assets/oviz-o-black.png'
import bagBlack from '../../public/assets/totebag-black.svg'
import bagWhite from '../../public/assets/totebag-white.svg'

import Image from 'next/image'

const Navbar = ({ children, inverted }) => {
  return (
    <nav className="font-sans flex flex-row h-28 text-left fixed justify-between py-4 px-6 items-center w-full px-2 sm:px-16">
      <div className=" ">
        <a href="/home">
          <div className="w-8">
            <Image src={inverted ? ovizWhite : ovizBlack} />
          </div>
        </a>
      </div>
      <div className="relative">
        <a href="/three">
          <div className="">
            <div className="w-9">
              <Image src={inverted ? bagWhite : bagBlack} />
            </div>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
