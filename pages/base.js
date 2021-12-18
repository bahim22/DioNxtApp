import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import '../styles/global.css'
import '../styles/globals.css'
import { useState } from 'react'
import Layout from '../components/layout'

const baseTitle = "DED Base"

export default function Base() {
     return (
    <section>
        <Head>{baseTitle}
        </Head>
        <div>
          <h1 className="text-3xl font-bold underline">Dionysus Era Base</h1>
        </div>
    </section>
    )
}