import '../styles/globals.css'
import Layount from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layount>
      <Component {...pageProps} />
    </Layount>
  )
}
export default MyApp
