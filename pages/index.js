import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import React from 'react'
//import { util } from 'prettier'

export default function Index({ allPostsData }){
  return (
    <main>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Full stack website made with Next.js, React.js, JSX, Css Modules. Dionysus Era next.js website"
          />
          <meta name="og:title" content={indexTitle} />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section>
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
              <Link href={`/home`}>
                <a>{siteTitle}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={Date} />
              </small>
                </li>
        </ul>
    </main>
  )
}
const siteTitle = 'Dionysus Main Landing'
const indexTitle = 'Dionysus Blog Home Page'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
