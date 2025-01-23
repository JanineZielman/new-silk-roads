import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="New Silk Roads" />
        <link rel="manifest" href="/site.webmanifest" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js" defer/>
        <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" defer/>
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-GTD8C8HK6W"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-GTD8C8HK6W', { 'anonymize_ip': true });
              `,
            }}
          />

      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
