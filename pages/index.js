import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        <p>Dionysus Era</p>
        <p>
          Development | Design{' '}
          <a href="https://dionysusera.business.site">Business Site</a>!
        </p>
      </section>
    </Layout>
  )
}
