import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../Components/Layout";
import Package from "../Components/Package";
import About from "../Components/About";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Kreative Kolumn- Your Dreams, Our Reality</title>
        <meta
          name="description"
          content="Know the Kreative Kolumn team and company vision, mission statements."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.jpg" />
      </Head>

      <Layout>
        <About />
      </Layout>
    </div>
  );
}
