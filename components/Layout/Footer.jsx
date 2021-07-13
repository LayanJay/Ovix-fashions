import { MdLocationOn } from 'react-icons/md'
import { MdLocalPhone } from 'react-icons/md'
import { MdMailOutline } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import Container from '../Layout/Container'

const Footer = () => {
  return (
    <footer className="bg-brown-footer bg-opacity-75 relative border-b-2 border-blue-700">
      <Container>
        <section className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-8 place-items-center py-10">
          <div className="md:col-span-1 flex flex-col justify-center font-roboto">
            <div className="inline-flex items-center my-3 space-x-4 group cursor-default">
              <div className="bg-brown-light text-brown-dark w-10 py-4 text-2xl flex justify-center items-center rounded-full">
                <MdLocationOn />
              </div>
              <div className="text-white w-56 group-hover:underline">
                No. 420, Vihara Mawatha, Kaduwela, Malabe
              </div>
            </div>

            <div className="inline-flex items-center my-3 space-x-4 group cursor-default">
              <div className=" bg-brown-light text-brown-dark w-10 py-4 text-2xl flex justify-center items-center rounded-full">
                <MdLocalPhone />
              </div>
              <div className="text-white w-56 group-hover:underline">
                +94 76 6868 231
              </div>
            </div>

            <div className="inline-flex items-center my-3 space-x-4 group cursor-default">
              <div className=" bg-brown-light text-brown-dark w-10 py-4 text-2xl flex justify-center items-center rounded-full">
                <MdMailOutline />
              </div>
              <div className="text-white w-56 group-hover:underline">
                info@ovizfashions.lk
              </div>
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col justify-center select-none">
            <span className="font-bold text-white font-playFair text-4xl mb-4">
              About us
            </span>

            <div className="text-white font-roboto text-sm max-w-md mb-8">
              Our user-friendly shopping experience was created to help you
              easily find your favorites while discovering new ones. We want you
              to feel at ease, confident, and carefree in what you wear and how
              you purchase at Clothing Shop Online. Get your items for a
              reasonable price with free delivery.
            </div>

            <div className="inline-flex space-x-4">
              <a
                target="_blank"
                rel="me noreferrer"
                href="https://www.instagram.com/oviz_fashion/"
              >
                <div className=" bg-brown-light text-brown-dark hover:text-offWhite hover:bg-brown-footer transition ease-in cursor-pointer w-10 py-4 text-2xl flex justify-center items-center rounded-full">
                  <AiOutlineInstagram />
                </div>
              </a>
              <a
                target="_blank"
                rel="me noreferrer"
                href="https://www.facebook.com/ovizFashion/"
              >
                <div className=" bg-brown-light text-brown-dark hover:text-offWhite hover:bg-brown-footer transition ease-in cursor-pointer w-10 py-4 text-2xl flex justify-center items-center rounded-full">
                  <FaFacebookF />
                </div>
              </a>
            </div>
          </div>
        </section>
      </Container>
      <div className="bg-brown-footer bg-opacity-70 font-roboto text-xs py-5">
        <p className="text-center text-white">
          © 2021 Oviz Fashions. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
