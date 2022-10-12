import '../styles/globals.css'
import Layount from '../components/layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layount>
      <ToastContainer limit={1} />
      <Component {...pageProps} />
    </Layount>
  )
}
export default MyApp
