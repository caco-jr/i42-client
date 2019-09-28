import React from 'react';

export const GAdSenseScript = () => {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-2787359838428098",
    enable_page_level_ads: true
  })`
        }}
      ></script>
    </>
  );
};
