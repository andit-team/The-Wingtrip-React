import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import Component
import TopMusic from '../component/About/TopMusic'
import CounterArea from '../component/About/Counter'
import JoinEvents from '../component/About/JoinEvents'
import Schedule from '../component/Home/Schedule'
import PhotoGallery from '../component/About/PhotoGallery'
import MeetOurTeam from '../component/About/OurTeam'
import TestimonialArea from '../component/Home/Testimonial'

const AboutPage = () => {
  return (
    <>
    <CommonBanner heading="About" pagination="About" />
    <TopMusic/>
    <CounterArea/>
    <JoinEvents/>
    <Schedule/>
    <PhotoGallery/>
    <MeetOurTeam/>
    <TestimonialArea/>
    </>
  )
}

export default AboutPage