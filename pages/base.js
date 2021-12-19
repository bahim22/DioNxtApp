//import Link from 'next/link'
import Head from 'next/head'
//import styles from '../components/layout.module.css'
//import styles from 'styles/index.css'
//import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import React from 'react'
//import Sidebar from '../components/sidebar'
import Content from '../components/content'

//const baseTitle = "DED Base"

export default function Base() {
     return (
      <main class='.main'>
        <Head>
          <title>About Page Dio</title>
        </Head>
        <Layout base/>
        <Content />
        <div class='.grid'>
          <article class='.p'>
          Base Page to test new compo
          <hr />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum consectetur odit? Excepturi tempore ipsam iusto ex officiis error autem nam, laborum, asperiores, sit amet corporis esse inventore necessitatibus quis.
          </article>
        </div>
       </main>
     )
}


  /*Base.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}*/
/**
 * example of pages/_document.js file
 * import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const meta = {
      title: 'Next.js Blog Starter Kit',
      description: 'Clone and deploy your own Next.js portfolio in minutes.',
      image:
        'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
    }

    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yourname" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
 */