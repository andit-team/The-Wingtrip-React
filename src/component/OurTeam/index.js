import React from 'react'
// import Section Heading
import SectionHeading from '../Common/SectionHeading'
// import Link
import { Link } from 'react-router-dom'
// import Data
import { TeamdataArea } from './data'

const OurTeamArea = () => {
  return (
    <>
          <section id="our-team-area" className="section-padding">
        <div className="container">
            <SectionHeading title="Our team" heading="Meet the organizer team members" />
            <div className="team-area-wrapper">
                <div className="row">
                    {TeamdataArea.map((data, index)=>(
                         <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                         <div className="team-card">
                             <div className="team-img">
                                 <Link to="/team-details"><img src={data.img} alt="img" /></Link>
                             </div>
                             <div className="team-info">
                                 <h3><Link to="/team-details">{data.name}</Link></h3>
                                 <p>{data.des}</p>
                             </div>
                             <div className="social-icon-area">
 
                                 <ul className="visible-icon">
                                     <li>
                                         <Link to="#!"><img src={data.icon} alt="icon" /></Link>
                                     </li>
                                 </ul>
                                 <ul className="invisible-icon">
                                     <li>
                                         <Link to="#!"><i className="fab fa-facebook"></i></Link>
                                     </li>
                                     <li>
                                         <Link to="#!"><i className="fab fa-twitter-square"></i></Link>
                                     </li>
                                     <li>
                                         <Link to="#!"><i className="fab fa-instagram"></i></Link>
                                     </li>
                                     <li>
                                         <Link to="#!"><i className="fab fa-linkedin"></i></Link>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                    ))}
                   
                </div>
            </div>
            <div className="col-lg-12">
                <div className="common-btn">
                    <button className="btn theme-btn">View All</button>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default OurTeamArea