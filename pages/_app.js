import Navber from '../Component/Navber'
import Footer from '../Component/Footer'
import '../styles/globals.css'
import '../styles/homepage.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Navber/>
  <Component {...pageProps} />
  {/* <Footer/> */}
  </>
}

export default MyApp
