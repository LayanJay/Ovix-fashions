import Container from '../../components/Layout/Container'
import Link from 'next/link'

const Button = () => {
    return(
        <>
        <section>
            <Container>
                <Link href='/'>
                    <button>Continue Shopping</button>
                </Link>
            </Container>
        </section>
        </>
    )

}

export default Button