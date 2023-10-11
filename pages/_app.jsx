import '@/styles/globals.scss'
import { UserProvider } from './components/common'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}