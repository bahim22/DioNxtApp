import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }){
  const postData = await getPostData(params.id)
  return {
      props: {
          postData
      }
    }
}

export default function Post({ postData }) {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className='.container'>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <Layout />
    </div>
  )
}
