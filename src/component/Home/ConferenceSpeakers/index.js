import React from 'react'
// import Link
import { Link } from 'react-router-dom'
// import Section Heading
import SectionHeading from '../../Common/SectionHeading'
// import Img
import img1 from "../../../assets/img/team/team-1.png"
import img2 from "../../../assets/img/team/team-2.png"
import img3 from "../../../assets/img/team/team-3.png"
import img4 from "../../../assets/img/team/team-4.png"
import Icon from "../../../assets/img/icon/share-icon.png"

const ConferenceSpeakersArea = () => {
    const teamData =[
        {
            name:"Selina valencia",
            des:"CEO & Organizer",
            img:img1
        },
        {
            name:"Saladin houti",
            des:"Chief manager",
            img:img2
        },
        {
            name:"Franc de rogin",
            des:"Brand promotor",
            img:img3
        },
        {
            name:"Florence ditio",
            des:"Sr. Organizer",
            img:img4
        },

    ]
  return (
    <>
        <section id="our-team-area" className="section-padding-bottom">
        <div className="container">
        <SectionHeading
            title="Conference speakers"
            heading="Speakers and organizers"
          />
            <div className="team-area-wrapper">
                <div className="row">
                    {teamData.map((data, index)=>(
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
                                         <Link to="#!"><img src={Icon} alt="icon" /></Link>
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
        </div>
    </section>
    </>
  )
}

export default ConferenceSpeakersArea