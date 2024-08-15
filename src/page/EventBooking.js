import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import Component
import EventBooking from '../component/EventBooking'

const EventBookingPage = () => {
  return (
    <>
        <CommonBanner heading="Book your Slot" pagination="Book your Slot"/>
        <EventBooking/>
    </>
  )
}

export default EventBookingPage