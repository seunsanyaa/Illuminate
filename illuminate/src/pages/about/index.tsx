import Head from "next/head";
import AboutComponent from "~/components/about";

export default function About() {
  return (
    <>
      <Head>
        <title>Illuminate</title>
        <meta name="description" content="Illuminate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
<AboutComponent/>
  
    </>
  );
}
