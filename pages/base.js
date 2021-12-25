//import Link from 'next/link'
import Head from 'next/head'
//import styles from '../components/layout.module.css'
//import styles from 'styles/index.css'
//import utilStyles from '../styles/utils.module.css'
//import Layout from '../components/layout'
import React from 'react'
//import Sidebar from '../components/sidebar'
//import Content from '../components/content'
import Caro from '../components/caros'
import NavTopOff from '../components/navi'
import Footer from '../components/foot'
import BdImg from '../components/bodyimg'
//import Image from 'next/image'

//const baseTitle = "DED Base"

export default function Base() {
     return (
      <div>
        <Head>
          <title>About Page Dio</title>
        </Head>
        <Caro />
        <NavTopOff />
        <Footer />
        <BdImg />
       </div>
     )
}


  /*Base.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}*/
