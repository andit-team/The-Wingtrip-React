import React from 'react'
// import CommonBanner
import CommonBanner from '../component/Common/CommonBanner'
// import Our Team
import OurTeamArea from '../component/OurTeam'

const TeamPage = () => {
  return (
    <>
       <CommonBanner heading="Team" pagination="Team"/>
       <OurTeamArea/>
    </>
  )
}

export default TeamPage