import Head from 'next/head';
import Date from '../../components/Date';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';

type PostDataProps = {
  title: string;
  date: string;
  contentHtml: string;
};

export default function Post({ postData }: { postData: PostDataProps }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-4xl pb-4">{postData.title}</h1>
        <div className="text-primary-500">
          <Date dateString={postData.date} />
        </div>
        <div
          className="font-serif py-4"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></div>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
