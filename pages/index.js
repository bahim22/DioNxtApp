import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
//import Sidebar from '../components/sidebar'
import Content from '../components/content'
import React from 'react'
//import { util } from 'prettier'

export default function Index({ allPostsData }){
  return (
    <main class='.main'>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Full stack website made with Next.js, React.js, JSX, Css Modules. Dionysus Era next.js website"
          />
          <meta name="og:title" content={indexTitle} />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className={utilStyles.container}>
        <p className='headingLg'>Dionysus Era</p>
        <p>
          Development | Design <a href="https://dionysusera.business.site">Business Site</a>
        </p>
      </section>
      <section className={'${utilStyles.headingMd} ${utilStyles.padding1px}'}>
        <h2 className={utilStyles.headingLg}> DioBlog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={Date} />
              </small>
            </li>
          ))}
          </ul>
      </section>
        <ul>
          <li className={utilStyles.listItem}>
            <Link href={`pages/base`}>
                <a>Base Page</a>
              </Link>
            <li className={utilStyles.listItem}>
              <Link href={`pages/home`}>
                <a>{siteTitle}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={Date} />
              </small>
            </li>
          </li>
          </ul>
      <Layout index/>
      <Content />
    </main>
  )
}

const indexTitle = 'Dionysus Blog Home Page'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
