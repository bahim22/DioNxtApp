import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
//import { Main } from 'next/document'

const name = "DedNext Project"
export const siteTitle = "Next Dionysus Era"

export default function Layout({ children, home }){
    return (
      <div className='.container'>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Full stack website made with Next.js, React.js, JSX, Css Modules. Dionysus Era next.js website"
          />
          <meta charSet="utf-8" />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <section className={styles.main}>
          {home ? (
            <>
              <Image
                priority
                src="/img/cover.jpeg"
                className={utilStyles.flex}
                height={300}
                width={300}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                  <Image
                    priority
                    src="/images/Fam.jpg"
                    className={utilStyles.flex}
                    height={200}
                    width={200}
                    alt={name}
                  />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/base">
                  <a className={utilStyles.a}>Base Page</a>
                </Link>
              </h2>
            </>
          )}
        </section>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </div>
        )}
      </div>
      )
    };