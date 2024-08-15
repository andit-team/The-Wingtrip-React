import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import Faqs Area
import FaqsArea from '../component/Faqs'


const FaqsPage = () => {
  return (
    <>
        <CommonBanner heading="Faqs" pagination="Faqs" />
        <FaqsArea/>
    </>
  )
}

export default FaqsPage