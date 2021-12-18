//import Link from 'next/link'
//import Image from 'next/image'
import Head from 'next/head'
import Match from "../components/aside.js";
//import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
//import { useState } from 'react'
import Layout from '../components/layout'

const baseTitle = "DED Base"

export default function Base() {
     return (
    <Match>
        <Layout />
        <Head><title>{baseTitle}</title></Head>
        <h2 className={utilStyles.headingLg}>
          {baseTitle}
        </h2>
          <a>{WImage}</a>
          <p>{MImage}</p>
          <p>{MyImage}</p>
        <div>
          <h1 className="text-3xl font-bold underline">Dionysus Era Base</h1>
        </div>
    </Match>
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