import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import Footer from "~/components/footer";
import "~/styles/globals.css";
import Header from "~/components/header";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={GeistSans.className}>
      <Header />
        <Component {...pageProps} />
        <Footer/>
      </main>

      
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
