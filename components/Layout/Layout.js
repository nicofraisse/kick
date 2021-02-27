import Head from 'next/head'
import classes from './layout.module.scss'
import Link from 'next/link'
import metadata from 'lib/metadata'

export default function Layout({ children, home }) {
  return (
    <div className={classes.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={metadata.siteDescription} />
        <meta name='og:title' content={metadata.siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={classes.header}>
        {!home && (
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}
