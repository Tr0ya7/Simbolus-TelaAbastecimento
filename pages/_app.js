import '@/styles/globals.scss'
import Store from './store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={ Store }>
      <Component {...pageProps} />
    </Provider>
  )
}