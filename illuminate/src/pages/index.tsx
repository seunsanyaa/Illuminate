import Head from "next/head";
import Banner from "~/components/banner";
import Header from "~/components/header";
import LatestPost from "~/components/latestpost";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Illuminate</title>
        <meta name="description" content="Illuminate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />


      <h2 className="font-semibold text-2xl py-10 pt-20">
      Latest Post
      </h2>
      <div className="flex gap-10">

      <LatestPost/>

      <LatestPost/>

      </div>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.post.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
