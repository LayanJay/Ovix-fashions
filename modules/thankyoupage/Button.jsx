// import Container from '../../components/Layout/Container'
import Link from 'next/link'

const Button = () => {
    return(
        <>
        <section>
           
                <Link href='/'><a>
                <div className="font-semibold text-sm text-brown-semiDark font-roboto rounded-full cursor-pointer border-brown-semiDark border-2 hover:text-offBrown hover:bg-gray-300">
                    <button className="p-1">Continue Shopping</button>
                    </div>
                </a>
                    
                </Link>
       </section>
        </>
    )

}

export default Button