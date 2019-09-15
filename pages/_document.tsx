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

          {/* Para validação do Google Search Console */}
          <meta
            name="google-site-verification"
            content="ZD9OmhEaRKpmHf2MNc9htuCMrvBJgg1Ca_3isTlkQ-Y"
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

          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-93047507-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-93047507-1');`
            }}
          ></script>

          <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
    (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-2787359838428098",
            enable_page_level_ads: true
        });`
            }}
          ></script>
          {/* <!-- End Google Adsense --> */}

          <script
            async
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
    window.smartlook||(function(d) {
        var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
        var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
        c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
        })(document);
        smartlook('init', '1f672e94efc947fef3dc76e7f8bff65d5a754607');`
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
