import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import PortfolioDetails
import ProductArea from '../component/Product'

const ProductPage = () => {
  return (
    <>
      <CommonBanner heading="Product" pagination="Product" />
       <ProductArea/>
    </>
  )
}

export default ProductPage