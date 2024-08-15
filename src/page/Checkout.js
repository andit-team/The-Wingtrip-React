import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import Component
import CheckOutArea from '../component/CheckOut'


const CheckoutPage = () => {
  return (
    <>
    <CommonBanner heading="Checkout" pagination="Checkout" />
    <CheckOutArea/>
    </>
  )
}

export default CheckoutPage