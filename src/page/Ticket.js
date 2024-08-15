import React from 'react'
// import CommonBanner
import CommonBanner from '../component/Common/CommonBanner'
// import Ticket
import TicketArea from '../component/Ticket'


const TicketPage = () => {
  return (
    <>
        <CommonBanner heading="Ticket page" pagination="Ticket page"/>
        <TicketArea/>
    </>
  )
}

export default TicketPage