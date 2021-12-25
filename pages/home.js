//import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout.js";
//import styles from '*.module.css'
import utilStyles from '../styles/utils.module.css'
//import Sidebar from "../components/sidebar.js";
import Content from '../components/content'
import React from "react";
//import NavTopOff from "../components/navi.js";
import Footer from "../components/foot.js";

export default function Home() {
  return (
    <main className={utilStyles.container}>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name="og:title" content="About Home Page" key='title' />
      </Head>
      <Layout />
      <Content />
      <section className={utilStyles.main}>
      <h1 className={utilStyles.heading2Xl}>Blog Section</h1>
        <h2 className={utilStyles.headingXl}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro quis saepe.</p>
        </h2>
      </section>
      <div className={utilStyles.grid}>
        <article className={utilStyles.card}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nostrum quas atque, omnis sapiente quia consequuntur incidunt, provident obcaecati commodi ex. Adipisci, officia aspernatur nobis odit odio quos saepe! Fugit?
        </article>
        <article className={utilStyles.card}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatum minus fuga impedit, dolorum tenetur quibusdam tempore, voluptates a aliquam et omnis, quasi qui quae laudantium animi dolores ratione est!
        </article>
      </div>
        <MyImage />
        <MImage />
        <MyImage />
        <MImage />
        <div className="utilStyles.card">
          <Footer />
        </div>
      </main>
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
      <Content />
      {page}
    </Layout>
  )
}*/
