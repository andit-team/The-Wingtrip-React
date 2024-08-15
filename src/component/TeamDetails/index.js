import React from 'react'
// import img
import imgs from "../../assets/img/team/team-details-img.png"
// import Section Heading
import SectionHeading from '../Common/SectionHeading'
// import link
import { Link } from 'react-router-dom'

const TeamDetails = () => {
  return (
    <>
         <section id="team-details" className="section-padding">
        <div className="container">
            <SectionHeading title="Team details" heading="Our expert member" />
            <div className="team-details-wrapper">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="team-details-img">
                            <img src={imgs} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-details-right">
                            <div className="team-details-head">
                                <div className="team-name">
                                    <h3>Santoshi Franklin</h3>
                                    <p>Event organizer</p>
                                </div>
                                <div className="team-contact">
                                    <p>Get in touch:</p>
                                    <div className="shear-icon">
                                        <Link to="#!"><i className="fab fa-facebook"></i></Link>
                                        <Link to="#!"><i className="fab fa-twitter-square"></i></Link>
                                        <Link to="#!"><i className="fab fa-instagram"></i></Link>
                                        <Link to="#!"><i className="fab fa-linkedin"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="team-details-text">
                                <p>Amet nisl purus in mollis nunc
                                    sed. Dolor sit amet consectetur adipiscing elit
                                    pellentesque. Lorem donec massa sapien faucibus et. Interdum consectetur libero id
                                    faucibus nisl tincidunt eget. Volutpat maecenas volutpat blandit aliquam.
                                    Suspendisse interdum consectetur libero id faucibus. Risus viverra adipiscing at in
                                    tellus integer feugiat mauris ultrices eros. Velit ut tortor pretium viverra
                                    suspendisse potenti. Nisi quis eleifend quam adipiscing vitae proin.</p>
                                <p>Purus viverra accumsan in nisl
                                    nisi. Laoreet id donec ultrices tincidunt arcu non
                                    sodales neque. Id leo in vitae turpis. Sed libero enim sed faucibus turpis in eu mi.
                                    Et malesuada fames ac turpis egestas.</p>
                                <p>Purus viverra accumsan in nisl
                                    nisi donec ultrices tincidunt arcu non sodales neque.
                                </p>
                                <div className="team-details-btn">
                                    <Link to="#!" className="btn theme-btn">Make An Appointment</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="appoinment-achedule-area">
                        <h6 className="Appointment-schedule-head">Appointment schedule</h6>
                        <div className="appoinment_table_area table-responsive">
                            <table className="table appoinment-achedule-table table-borderless text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Monday</th>
                                        <th scope="col">Tuesday</th>
                                        <th scope="col">Wednesday</th>
                                        <th scope="col">Thursday</th>
                                        <th scope="col">Friday</th>
                                        <th scope="col">Saturday</th>
                                        <th scope="col">Sunday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>09:00-17:00</td>
                                        <td>09:00-17:00</td>
                                        <td>09:00-17:00</td>
                                        <td>09:00-17:00</td>
                                        <td>09:00-17:00</td>
                                        <td>09:00-15:00</td>
                                        <td>Off</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    </>
  )
}

export default TeamDetails