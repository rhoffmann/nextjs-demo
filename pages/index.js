import Head from 'next/head';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/Layout';

export default function Home({ allPostsData }) {
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
            <li className="text-md pb-2" key={id}>
              <Link href={`/posts/${id}`}>
                <a>
                  {title} <br /> {date}
                </a>
              </Link>
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
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
