import '@/styles/globals.scss'
import { UserProvider } from '../common'

export default function App({ Component, pageProps }) {
  return <UserProvider><Component {...pageProps} /></UserProvider>
}