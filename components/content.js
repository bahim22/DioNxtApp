
//import ReactDom from 'react-dom'
import React from 'react'
//import Head from 'next/head'
import Image from 'next/image'
//import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
//import { util } from 'prettier'
//import Link from 'next/link'
//import { Main } from 'next/document'


//top half of the body section of each page to be passed props to change depending on what page it's called in. need to add styles and tailwind. has pics, cards w/ pic and text
export default function Content() {
    return (
      <div className={utilStyles.container}>
        <section className={utilStyles.main}>
        <h1 className={utilStyles.headingLg}>
          Dio Era Dev | Design
        </h1>
            <ul className={utilStyles.flex}>
                <MImage />
                <li className={utilStyles.listItem}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate optio exercitationem ratione eos illo minima beatae velit nam odit praesentium minus fugit nihil, expedita aliquam accusamus modi molestiae mollitia!
                </li>
                <WImage />
                <li className={utilStyles.listItem}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, numquam accusamus aspernatur veritatis facere qui. Eaque iusto aspernatur reiciendis cumque, fuga at et exercitationem eos odit asperiores quasi rem! Fugit!
                </li>
                <MyImage />
            </ul>
        </section>
        </div>
    )
}


const MyImage = () => (
  <Image
    src="/img/bg.jpg" // Route of the image file
    height={300} // Desired size with correct aspect ratio
    width={300} // Desired size with correct aspect ratio
    alt="Dionysus Era logo"
  />
)
const MImage = () => (
  <Image
    src="/img/sign.jpg" // Route of the image file
    height={300} // Desired size with correct aspect ratio
    width={300} // Desired size with correct aspect ratio
    alt="Dionysus Era logo"
  />
)
const WImage = () => (
  <Image
    src="/img/bg3.jpg" // Route of the image file
    height={300} // Desired size with correct aspect ratio
    width={300} // Desired size with correct aspect ratio
    alt="Dionysus Era logo"
  />
)

const name = "hima"

const AImage = () => (
  <Image
    src="/img/bg4.jpg" // Route of the image file
    height={300} // Desired size with correct aspect ratio
    width={300} // Desired size with correct aspect ratio
    alt="mountain background"
  />
);
const BImage = () => (
  <Image
    src="/img/sign.jpg" // Route of the image file
    height={300} // Desired size with correct aspect ratio
    width={300} // Desired size with correct aspect ratio
    alt="sign clouds"
  />
);
const CImage = () => (
  <Image
    src="/img/bg3.jpg" // Route of the image file
    height={300} // Desired size with correct aspect ratio
    width={300} // Desired size with correct aspect ratio
    alt="forest background"
  />
);