import Layout from "../Components/Layout";
import Head from "next/head";
import Calculator from "../Components/Calculator";
function calculator() {
  return (
    <div>
      <Head>
        <title>
          Cost Estimator of Kreative Kolumn- Your Dreams, Our Reality
        </title>
        <meta
          name="description"
          content="Know the cost estimator of your dream house with Kreative Kolumn cost calculator."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.jpg" />
      </Head>

      <Layout>
        <Calculator />
      </Layout>
    </div>
  );
}

export default calculator;
