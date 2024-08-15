import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import PortfolioDetails
import ProductDetailsArea from '../component/ProductDetails'

const ProductDetailsPage = () => {

  return (
    <>
    <CommonBanner heading="Product details" pagination="Product details" />
    <ProductDetailsArea/>
    </>
  )
}

export default ProductDetailsPage