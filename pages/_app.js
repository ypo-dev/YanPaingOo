import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../component/Layout'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';




function MyApp({ Component, pageProps }) {
 
  return (
    <>
      <Head>
      
        <title>Yan Paing Oo</title>
        
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
