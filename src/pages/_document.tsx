import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=PT+Sans&display=swap" rel="stylesheet" />
      </Head>
      <title>Web WhatsApp</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}