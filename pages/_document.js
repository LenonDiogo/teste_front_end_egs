import { Head, Html, Main, NextScript } from "next/document";

const NextDocument = () => (
  <Html lang="pt-BR">
    <Head>
      <meta charSet="utf-8" />
      <link href="https://blzcdn.com.br/store_47_icon" rel="icon" />
      <link href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,300;0,400;0,600;1,100&family=Ubuntu:ital,wght@1,500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,300;0,400;0,600;1,100&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Ubuntu:ital,wght@1,500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body style={{ overflow: "overlay" }}>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default NextDocument;
