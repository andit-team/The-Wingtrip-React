import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import PortfolioDetails
import PortfolioDetails from '../component/PortfolioDetails'

const PortfolioDetailsPage = () => {
  return (
    <>
      <CommonBanner heading="Portfolio details" pagination="Portfolio details" />
      <PortfolioDetails/>
    </>
  )
}

export default PortfolioDetailsPage