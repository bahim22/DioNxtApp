
//import ReactDom from 'react-dom'
import React from 'react'
//import { render } from 'react-dom'
import Head from 'next/head'
import Image from 'next/image'
//import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
//import { Main } from 'next/document'
import { Date } from './date'
import Layout from './layout'



export default function Match() {
    return (
        <Layout>
            <header className={utilStyles.header}>Cora Athena Sqaud</header>
            <nav>
                <ul className={utilStyles.list}>
                    <li className={utilStyles.listItem}>
                        <MImage /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, expedita. Beatae necessitatibus numquam molestiae autem, dolore laudantium eveniet et eos iste, exercitationem reprehenderit voluptatem, facilis aut ratione cupiditate accusamus reiciendis.
                    </li>
                    <li className={utilStyles.listItem}>
                        <WImage /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate optio exercitationem ratione eos illo minima beatae velit nam odit praesentium minus fugit nihil, expedita aliquam accusamus modi molestiae mollitia!
                    </li>
                    <li className={utilStyles.listItem}>
                        <MyImage /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, numquam accusamus aspernatur veritatis facere qui. Eaque iusto aspernatur reiciendis cumque, fuga at et exercitationem eos odit asperiores quasi rem! Fugit!
                    </li>
                </ul>
            </nav>
            <Head />
            <Link href="/">
                <a>
                    <Image
                    priority
                    src="/img/bg7.jpg"
                    className={utilStyles.container}
                    height={200}
                    width={200}
                    alt={name}
                    />
                </a>
                </Link>
        </Layout>
    )
}

const name = "hima"

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
const WImage = () => (
  <Image
    src="/img/bg3.jpg" // Route of the image file
    height={300} // Desired size with correct aspect ratio
    width={300} // Desired size with correct aspect ratio
    alt="Dionysus Era logo"
  />
);