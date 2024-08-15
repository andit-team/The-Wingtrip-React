import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import event
import EventPage from '../component/Event'

const EventPageArea = () => {
  return (
    <>
        <CommonBanner heading="Event" pagination="Event"/>
        <EventPage/>
    </>
  )
}

export default EventPageArea