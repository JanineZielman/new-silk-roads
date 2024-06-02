import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fff"/>
        <meta name="msapplication-TileColor" content="#fff"/>
        <meta name="theme-color" content="#ffffff"></meta> */}
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js" defer/>
        <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" defer/>
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
