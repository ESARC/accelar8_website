import { Html, Head, Main, NextScript } from 'next/document'
import metadata from '../utils'
import Header from './header'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
