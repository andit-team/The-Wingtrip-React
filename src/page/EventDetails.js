import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import EventDetailsArea
import EventDetailsArea from '../component/EventDetails'

const EventDetails = () => {
  return (
    <>
         <CommonBanner heading="Event details" pagination="Event details"/>
          <EventDetailsArea/>
    </>
  )
}

export default EventDetails