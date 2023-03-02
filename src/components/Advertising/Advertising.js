import React from 'react'
// import AdSense from 'react-adsense'
import { Adsense } from '@ctrl/react-adsense'

export const Advertising = () => {
  return (
    <>
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9223271762936183"
     crossOrigin="anonymous"></script>
      <ins
        className="adsbygoogle"
        //  style="display:block"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9223271762936183"
        data-ad-slot="3375450250"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}

      {/* <AdSense.Google
        client="ca-pub-9223271762936183"
        slot="3375450250"
        // style={{ display: 'block' }}
        style={{ width: 500, height: 300, float: 'left' }}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      /> */}

      <Adsense
        client="ca-pub-9223271762936183"
        slot="3375450250"
        style={{ display: 'block' }}
        layout="in-article"
        format="fluid"
      />
    </>
  )
}
