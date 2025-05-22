import React from 'react'
import { Helmet } from 'react-helmet'
import ReactPixel from "react-facebook-pixel"


function metaPixel() {
  return (
    <div>
<Helmet>

     <script key="function" id='facebook-pixel-script'>
        {`
      
      function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '738274758141272');
      fbq('track', 'PageView');
    
        
        `}
    </script> 

    <noscript key="image" id='facebook-pixel-image'>
        {`
         <img height="1" width="1" 
         src="https://www.facebook.com/tr?id=738274758141272&ev=PageView
         &noscript=1"/>
        `}
        
    </noscript>
</Helmet>

    </div>
  )
}

export default metaPixel



// const options = {
//     autoConfig:true,
//     debug:false,
// }

// ReactPixel.init("698101745573244", options);

// ReactPixel.pageView();

