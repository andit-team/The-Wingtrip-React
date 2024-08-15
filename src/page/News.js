import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import Component
import NewsArea from '../component/News'

const NewsPage = () => {
  return (
    <>
        <CommonBanner heading="Our latest news" pagination="Our latest news" />
        <NewsArea/>
    </>
  )
}

export default NewsPage