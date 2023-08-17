import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import metadata from "./utils";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:url" content="https://digiauto.dev/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <div className="bg-[url('/bg.svg')] h-full bg-cover bg-no-repeat flex flex-col">
        <Component {...pageProps} />
      </div>
    </>
  );
}
