import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import Alert from '../components/Alert';

export default function Home() {
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
      <Alert type="success">Yay, success</Alert>
    </Layout>
  );
}
