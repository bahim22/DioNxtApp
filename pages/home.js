import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout.js";
import Aside from "../components/content.js";
//import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
      <Layout />
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name="og:title" content="About Home Page" key='title' />
      </Head>

      <h1 className={utilStyles.heading2Xl}>Blog Section</h1>
        <h2 className={utilStyles.headingXl}>
          <Link href="/">
            <a> Back to Landing Page</a>
          </Link>
        </h2>

      <body className={utilStyles.body}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nostrum quas atque, omnis sapiente quia consequuntur incidunt, provident obcaecati commodi ex. Adipisci, officia aspernatur nobis odit odio quos saepe! Fugit?
      </body>
      <main className={styles.main}>{children}</main>
        <h3>
          <MyImage />
          <MImage />
        </h3>
      </>
  );
}

const MyImage = () => (
  <Image
    src="/img/bg.jpg" // Route of the image file
    height={300} // Desired size with correct aspect ratio
    width={300} // Desired size with correct aspect ratio
    alt="Dionysus Era logo"
  />
);
const MImage = () => (
  <Image
    src="/img/sign.jpg" // Route of the image file
    height={300} // Desired size with correct aspect ratio
    width={300} // Desired size with correct aspect ratio
    alt="Dionysus Era logo"
  />
);

/*Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}*/
