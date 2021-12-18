
//import ReactDom from 'react-dom'
import React from 'react'
//import { render } from 'react-dom'
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Main } from 'next/document'
import { dateNew } from './date'


export default function Match() {
    return (
        <aside classname={utilStyles.lightText}>
            <header className='.header'>Cora Athena Sqaud</header>
            <Nav />
            <Head />
            <Main />

            <main>{children}</main>
            {!home && (
            <div className={styles.backToHome}>
            <Link href="/">
                <a>Home</a>
            </Link>
            </div>
            )}
            <Link href="/">
                <a className='.container'>
                    <Image
                    priority
                    src="/img/bg4.jpg"
                    className={utilStyles.borderCircle}
                    height={200}
                    width={200}
                    alt={dateNew}
                    />
                </a>
                </Link>
        </aside>
    )
}
