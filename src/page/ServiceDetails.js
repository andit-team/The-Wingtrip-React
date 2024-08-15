import React from 'react'
// import CommonBanner
import CommonBanner from '../component/Common/CommonBanner'
// import ServiceDetailsArea
import ServiceDetailsArea from '../component/ServiceDetails'


const ServiceDetailsPage = () => {
  return (
    <>
    <CommonBanner heading="Service details" pagination="Service details"/>
    <ServiceDetailsArea/>
    </>
  )
}

export default ServiceDetailsPage