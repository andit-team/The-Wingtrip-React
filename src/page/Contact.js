import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import Component
import ContactArea from '../component/Contact'


const ContactPage = () => {
  return (
    <>
    <CommonBanner heading="Contact us" pagination="Contact us" />
    <ContactArea/>
    </>
  )
}

export default ContactPage