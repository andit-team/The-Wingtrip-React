import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import Component
import NewsDetailsArea from '../component/NewsDetails'

const NewsDetailsPage = () => {
  return (
    <>
        <CommonBanner heading="News details" pagination="News details" />
        <NewsDetailsArea/>
    </>
  )
}

export default NewsDetailsPage