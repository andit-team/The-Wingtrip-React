import React from 'react'
// import CommonBanner
import CommonBanner from '../component/Common/CommonBanner'
// import ServicesArea
import ServicePageArea from '../component/Service'
const ServicePage = () => {
  return (
    <>
     <CommonBanner heading="Service" pagination="Service"/>
     <ServicePageArea/>
    </>
  )
}

export default ServicePage