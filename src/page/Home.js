import React from 'react'
// import Banner
import HomeBanner from "../component/Home/Banner"
// import About
import EventOrganizeArea from '../component/Home/EventOrganize'
// import EventAgenda
import EventAgenda from '../component/Home/EventAgenda'
// import Schedule
import Schedule from '../component/Home/Schedule'
// import BusinessConferenceArea
import BusinessConferenceArea from '../component/Home/BusinessConference'
// import ConferenceSpeakersArea
import ConferenceSpeakersArea from '../component/Home/ConferenceSpeakers'
// import PricingArea
import PricingArea from '../component/Home/Pricing'
// import TopEvents
import TopEvents from '../component/Home/TopEvents'
// import SponsorsArea
import SponsorsArea from '../component/Home/Sponsors'
// import TestimonialArea
import TestimonialArea from '../component/Home/Testimonial'



const HomeOne = () => {
  return (
    <>
        <HomeBanner/>
        <EventOrganizeArea/>
        <EventAgenda/>
        <Schedule/>
        <BusinessConferenceArea/>
        <ConferenceSpeakersArea/>
        <PricingArea/>
        <TopEvents/>
        <SponsorsArea/>
        <TestimonialArea/>
    </>
  )
}

export default HomeOne