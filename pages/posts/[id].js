import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <div>{postData.id}</div>
      <div>{postData.date}</div>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
