import '../styles/global.scss'
import Layout from 'components/Layout/Layout'
import { SWRConfig } from 'swr'
import { fetcher } from 'lib/fetcher'

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}
