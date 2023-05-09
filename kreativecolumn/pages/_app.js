import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// }

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {};
//   ctx.res.setHeader('Cache-Control', 'no-cache');
//   return { pageProps };
// };

export default MyApp
