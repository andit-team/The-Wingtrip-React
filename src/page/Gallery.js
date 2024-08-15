import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import GalleryArea
import GalleryArea from '../component/Gallery'

const GalleryPage = () => {
  return (
    <>
        <CommonBanner heading="Gallery" pagination="Gallery" />
        <GalleryArea/>
    </>
  )
}

export default GalleryPage