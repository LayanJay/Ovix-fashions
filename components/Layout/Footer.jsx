import { MdLocationOn } from 'react-icons/md'
import { MdLocalPhone } from 'react-icons/md'
import { MdMailOutline } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer bg-brown-dark opacity-75 relative pt-1 border-b-2 border-blue-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full md:px-15 lg:px-24 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <div className="my-2 flex flex-row">
                <div className=" bg-brown-light text-brown-dark w-10 py-4 text-2xl flex justify-center items-center rounded-full">
                  <MdLocationOn />
                </div>
                <div className="text-white pl-4 w-56 flex items-center">
                  No. 420, Vihara Mawatha, Kaduwela, Malabe
                </div>
              </div>

              <div className="my-2 flex flex-row">
                <div className=" bg-brown-light text-brown-dark w-10 py-4 text-2xl flex justify-center items-center rounded-full">
                  <MdLocalPhone />
                </div>
                <div className="text-white pl-4 w-56 flex items-center">
                  +94 76 6868 231
                </div>
              </div>

              <div className="my-2 flex flex-row">
                <div className=" bg-brown-light text-brown-dark w-10 py-4 text-2xl flex justify-center items-center rounded-full">
                  <MdMailOutline />
                </div>
                <div className="text-white pl-4 w-56 flex items-center">
                  info@ovizfashions.lk
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full sm:w-96 lg:mr-20">
              <span className="font-bold text-white mt-4 md:mt-0 mb-2 font-playFair text-4xl">
                About us
              </span>
              <span className="my-2">
                <div className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </div>
              </span>
              <span className="my-2 flex gap-4">
                <div className=" bg-brown-light text-brown-dark w-10 py-4 text-2xl flex justify-center items-center rounded-full">
                  <AiOutlineInstagram />
                </div>
                <div className=" bg-brown-light text-brown-dark w-10 py-4 text-2xl flex justify-center items-center rounded-full">
                  <FaFacebookF />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm mb-2 text-white">
              © 2021 Oviz Fashions. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
