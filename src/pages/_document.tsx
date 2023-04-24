import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="hy">
        <Head>
          <link
            rel="shortcut icon"
            href="https://html.lionode.com/darklook/images/favicon.png"
          />
          <link
            rel="apple-touch-icon"
            href="https://html.lionode.com/darklook/images/apple-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="https://html.lionode.com/darklook/images/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="https://html.lionode.com/darklook/images/apple-touch-icon-114x114.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
