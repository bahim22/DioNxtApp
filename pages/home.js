import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout.js";
export default function FirstPost() {
  return (
    <>
      <Layout home>
        <Head>
          <title>Dionysus Era Blog</title>
        </Head>
        <h1>Blog Section</h1>
        <h2>
          <Link href="/">
            <a> Back to home</a>
          </Link>
        </h2>
        <h3>
          <MyImage />
        </h3>
      </Layout>
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
