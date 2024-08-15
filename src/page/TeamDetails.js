import React from 'react'
// import CommonBanner
import CommonBanner from '../component/Common/CommonBanner'
// import TeamDetails
import TeamDetails from '../component/TeamDetails'

const TeamDetailsPage = () => {
  return (
    <>
       <CommonBanner heading="Team details" pagination="Team details"/>
       <TeamDetails/>
    </>
  )
}

export default TeamDetailsPage