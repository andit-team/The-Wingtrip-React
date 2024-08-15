import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import PortfolioArea
import PortfolioArea from '../component/Portfolio'

const PortfolioPage = () => {
  return (
    <>
    <CommonBanner heading="Portfolio" pagination="Portfolio" />
    <PortfolioArea/>
    </>
  )
}

export default PortfolioPage