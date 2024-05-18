import Head from "next/head";
import Banner from "~/components/banner";
import Header from "~/components/header";
import LatestPost from "~/components/latestpost";


export default function Home() {

  return (
    <>
      <Head>
        <title>Illuminate</title>
        <meta name="description" content="Illuminate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <Banner />

      <div className="px-4 md:px-8 lg:px-16">
        

      <h2 className="font-semibold text-2xl py-10 pt-20 pb-0">
      Latest Post
      </h2>
      <div >

      <LatestPost/>

      </div>

      </div>
    </>
  );
}

