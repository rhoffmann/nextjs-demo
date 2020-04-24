import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';
import Date from '../components/Date';
import Layout, { siteTitle } from '../components/Layout';

export default function Home({
  allPostsData,
}: {
  allPostsData: { date: string; title: string; id: string }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-md py-4">
        <p>
          Hello, I'm Richard. I'm a software developer focussing on React. This
          is me experimenting with NEXT.js
        </p>
      </section>
      <section className="py-4">
        <Link href="/movies">
          <a>go check a movie</a>
        </Link>
      </section>
      <section className="py-8">
        <h2 className="font-serif text-4xl">Blog</h2>
        <ul className="list-none">
          {allPostsData.map(({ id, date, title }) => (
            <li className="pb-2" key={id}>
              <Link href={`/posts/[id]`} as={`/posts/${id}`}>
                <a className="text-primary-500 text-lg">
                  {title}
                  <br />
                </a>
              </Link>
              <small className="text-sm opacity-50">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// use getServerSideProps when you want to fetch data at request time
// export async function getServerSideProps(context) {
//   return {
//     props: {},
//   };
// }

// use getStaticProps if the page can be generated at build time
export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
