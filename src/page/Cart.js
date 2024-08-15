import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import Component
import CartArea from '../component/Cart'


const CartPage = () => {
  return (
    <>
    <CommonBanner heading="Cart" pagination="Cart" />
    <CartArea/>
    </>
  )
}

export default CartPage