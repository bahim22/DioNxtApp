import React from 'react'
import Image from 'next/image'
//import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
export default function BdImg() {
    return (
      <>
      <div className={utilStyles.container}>
        <section className={utilStyles.main}>
        <h1 className={utilStyles.headingLg}>
          Dio Era Dev | Design
        </h1>
            <ul className={utilStyles.flex}>
                <li className={utilStyles.listItem}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, expedita. Beatae necessitatibus numquam molestiae autem, dolore laudantium eveniet
                </li>
                <MyImage />
                <li className={utilStyles.listItem}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate optio exercitationem ratione eos.
                </li>
                <MImage />
                <li className={utilStyles.listItem}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, numquam accusamus aspernatur veritatis facere qui. Eaque iusto aspernatur reiciendis cumque, fuga.
                </li>
                <WImage />
            </ul>
        </section>

        <section>
        <h2 className={utilStyles.headingMd}>
        Dionysus Era Base
        </h2>
        <Image
            priority
            src="/img/bg7.jpg"
            className={utilStyles.card}
            height={200}
            width={200}
            alt={name}
            />

        <Image
            priority
            src="/img/bg7.jpg"
            className={utilStyles.card}
            height={200}
            width={200}
            alt={name}
            />
        <CImage />
          <div className={utilStyles.card}>
            <MImage />
          </div>
          <div className={utilStyles.card}>
            <BImage />
          </div>
          <div className={utilStyles.card}>
            <AImage />
          </div>
        </section>
        </div>
      </>
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