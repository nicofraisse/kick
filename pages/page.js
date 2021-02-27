import React from 'react'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import useSWR from 'swr'

const page = () => {
  const { data, error } = useSWR('/api/hello')
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout>
      <Head>
        <title>Page</title>
      </Head>
      <h1>{data?.text}</h1>
    </Layout>
  )
}

export default page
