import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '@fontsource/playfair-display'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/800.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CartProvider } from '../context/cart'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
