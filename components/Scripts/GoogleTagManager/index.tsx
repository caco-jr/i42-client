import React from 'react';

const GA_TRACKING_ID = 'UA-93047507-1';

export const GtagScript = () => {
  return (
    <>
      <script
        async
        id="gtm-js"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></script>

      <script
        async
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}`
        }}
      ></script>
    </>
  );
};

export const GtagNoscript = () => (
  <>
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  </>
);

export const gTagInitialize = () => {
  // @ts-ignore
  gtag('js', new Date());

  // @ts-ignore
  gtag('config', GA_TRACKING_ID);
};
