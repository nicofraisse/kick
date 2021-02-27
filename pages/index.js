import Head from 'next/head'
import Layout, { siteTitle } from 'components/Layout/Layout'
import metadata from 'lib/metadata'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{metadata.siteTitle}</title>
      </Head>
      <section>
        <h1>Home</h1>
        <Link href='/page'>
          <a>Go to some other page</a>
        </Link>
      </section>
    </Layout>
  )
}
