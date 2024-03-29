import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = "DedNext Project"
export const siteTitle = "Next Dionysus Era"

export default function Layout({ children, home }){
    return (
      <div className='main'>
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
        <section className={styles.container}>
          {home ? (
            <>
              <Link href='/'>
                <Image
                  priority
                  src="/images/Dedd.jpg"
                  className={utilStyles.card}
                  height={300}
                  width={300}
                  alt={name}
                />
              </Link>
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                  <Image
                    priority
                    src="/images/Dedd-full.jpg"
                    className={utilStyles.card}
                    height={200}
                    width={200}
                    alt={name}
                  />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a>Home Page</a>
                </Link>
              </h2>
            </>
          )}
        <main>{children}</main>
        {!home && (
          <div className={utilStyles.card}>
            <Link href="/home">
              <a>Dionysus Era Main</a>
            </Link>
          </div>
        )}</section>
      </div>
      )
    };
