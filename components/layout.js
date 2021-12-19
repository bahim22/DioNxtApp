import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = "Ibrahima Balde"
export const siteTitle = "Next Dionysus Era"

export default function Layout({ children, home }){
    return (
      <>
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
        <section className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/img/cover.jpeg"
                className={utilStyles.borderCircle}
                height={300}
                width={300}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/Fam.jpg"
                    className={utilStyles.borderCircle}
                    height={200}
                    width={200}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </section>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
        )}
      </>
      )
    };