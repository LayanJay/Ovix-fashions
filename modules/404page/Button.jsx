import Link from 'next/link'

const Button = () => {
    return (
        <>
        <section>
        
            <Link href='/'>
                <a>
                <button className="font-semibold text-sm text-brown-semiDark font-roboto rounded-full cursor-pointer border-brown-semiDark border-2 hover:text-offBrown hover:bg-gray-300 p-1">Go Back</button>
                </a>
            </Link>
        
                         
    </section>
    </>
    )
    
}

export default Button