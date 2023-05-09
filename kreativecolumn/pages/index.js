import Layout from "../Components/Layout";
import Head from "next/head";
import HomeComp from "../Components/HomeComp";

function Home() {
  return (
    <div>
      <Head>
        <title> 
          Kreative Kolumn Construction Company- Your Dreams, Our Reality
        </title>
        <meta
          name="description"
          content="Kreative Kolumn is one of the best construction company in Hyderabad offering different services to build your dream home."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.jpg" />
      </Head>

      <Layout>
        <HomeComp />
      </Layout>
    </div>
  );
}

export default Home;
