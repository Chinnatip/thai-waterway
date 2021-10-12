import '../styles/index.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
