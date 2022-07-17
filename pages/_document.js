import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta charSet="utf-8" />
        <link
            rel="preload"
            href="/fonts/Caterina.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Caterina.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
      </Head>
      <body className='h-screen grid grid-cols-1 grid-rows-1 place-items-center'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}