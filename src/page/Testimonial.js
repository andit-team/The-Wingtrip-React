import React from 'react'
// import CommonBanner
import CommonBanner from '../component/Common/CommonBanner'
// import TestimonialMainArea
import TestimonialMainArea from '../component/Testimonial'

const TestimonialPage = () => {
  return (
    <>
        <CommonBanner heading="Testimonial" pagination="Testimonial"/>
        <TestimonialMainArea/>
    </>
  )
}

export default TestimonialPage