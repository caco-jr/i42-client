import React from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document<any> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return { ...initialProps, ...page, styleTags };
  }

  render() {
    return (
      <html lang="pt-BR">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,viewport-fit=cover"
          />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/filipelinhares/ress/master/dist/ress.min.css"
          />
          <link rel="stylesheet" href="/static/styles/FontFamily/style.css" />
          <link rel="manifest" href="/static/manifest/manifest.json" />
          <link rel="manifest" href="manifest.webmanifest" />

          <link
            rel="apple-touch-icon"
            sizes="48x48"
            href="/static/manifest/launcher-icon.png?v=1.0.0"
          />
          <link
            rel="apple-touch-icon"
            sizes="96x96"
            href="/static/manifest/launcher-icon@2x.png?v=1.0.0"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/static/manifest/launcher-icon@4x.png?v=1.0.0"
          />

          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <script
            async
            src="https://cdn.jsdelivr.net/npm/pwacompat@2.0.9/pwacompat.min.js"
            integrity="sha384-VcI6S+HIsE80FVM1jgbd6WDFhzKYA0PecD/LcIyMQpT4fMJdijBh0I7Iblaacawc"
            crossOrigin="anonymous"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
