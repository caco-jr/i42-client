import React from 'react';

const SmartLookScript = () => {
  return (
    <script
      defer
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
  );
};

export default SmartLookScript;
