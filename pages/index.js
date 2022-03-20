import axios from 'axios'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';

export default function Home({ pages, homePage }) {
  return (
    <div>
      <Head>
        <title>Breally</title>
        <meta name="description" content="Breally" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header links={pages} />
      <Hero data={homePage.sections[0]}/>
      <Testimonials data={homePage.sections[1]}/>
      <Newsletter />
    </div>
  )
}

export async function getStaticProps() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const auth = {
    username: process.env.NEXT_PUBLIC_API_LOGIN,
    password: process.env.NEXT_PUBLIC_API_PASSWORD
  }
  const pagesRes = await axios.get(`${API_URL}/pages`, {
    auth
  });
  const pages = pagesRes.data;

  const homePageRes = await axios.get(`${API_URL}/page/${pages[0].id}`, {
    auth
  });
  const homePage = homePageRes.data;

  return {
    props: { pages, homePage },
  }
}