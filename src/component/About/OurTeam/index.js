import React from 'react'
// import Link
import { Link } from 'react-router-dom'
// import img
import img1 from "../../../assets/img/team/team-one.png"
import img2 from "../../../assets/img/team/team-two.png"
import img3 from "../../../assets/img/team/team-three.png"
import img4 from "../../../assets/img/team/team-four.png"
import icon from "../../../assets/img/icon/team-2-shear.png"

const MeetOurTeam = () => {
    const TeamData =[
        {
            name:"Selina valencia",
            des:"CEO & Founder",
            icon:icon,
            img:img1
        },
        {
            name:"Saladin houti",
            des:"Chief manager",
            icon:icon,
            img:img2
        },
        {
            name:"Franc de rogin",
            des:"Brand promotor",
            icon:icon,
            img:img3
        },
        {
            name:"Florence ditio",
            des:"Sr. Organizer",
            icon:icon,
            img:img4
        }
    ]
  return (
    <>
        <section id="team-area-two">
        <div className="container">
            <div className="team-area-wrapper">
                <div className="team-top-area">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="team-head">
                                <h4>Meet our team</h4>
                                <h2>Meet the organizer team members</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="team-para">
                                <p>Cupidatat sunt excepteur ipsum non. Ex consectetur amet eu commodo incididunt elit
                                    incididunt aliqua aliqua irure elit minim voluptate. Sit est nisi labore eiusmod et
                                    ad.
                                    Anim quis anim adipisicing quis cillum id ullamco officia do culpa voluptate
                                    exercitation nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {TeamData.map((data, index)=>(
                           <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                           <div className="team-card-two">
                               <div className="team-img">
                                   <Link to="/team-details"><img src={data.img} alt="img" /></Link>
                               </div>
                               <div className="team-info-two">
                                   <h3><Link to="/team-details">{data.name}</Link></h3>
                                   <p>{data.des}</p>
                               </div>
                               <div className="team-two-social-icon-area">
                                   <ul className="team-two-visible-icon">
   
                                       <li>
                                           <Link href="#!"><img src={data.icon} alt="icon" /></Link>
                                       </li>
   
                                   </ul>
                                   <ul className="team-two-invisible-icon">
                                       <li>
                                           <Link href="#!"><i className="fab fa-facebook"></i></Link>
                                       </li>
                                       <li>
                                           <Link href="#!"><i className="fab fa-twitter-square"></i></Link>
                                       </li>
                                       <li>
                                           <Link href="#!"><i className="fab fa-instagram"></i></Link>
                                       </li>
                                       <li>
                                           <Link href="#!"><i className="fab fa-linkedin"></i></Link>
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

export default MeetOurTeam