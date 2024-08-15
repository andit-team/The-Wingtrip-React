import React from 'react'
// import Sectionheading
import SectionHeading from '../../Common/SectionHeading'
// import Icon 
import Icon1 from "../../../assets/img/icon/top-icon-1.png"
import Icon2 from "../../../assets/img/icon/top-icon-2.png"
import Icon3 from "../../../assets/img/icon/top-icon-3.png"
import Icon4 from "../../../assets/img/icon/top-icon-4.png"
import arrow from "../../../assets/img/icon/arrow-btn.png"
// import link
import { Link } from 'react-router-dom'

const TopEvents = () => {
  return (
    <>
         <section id="top-event-area" className="section-padding">
        <div className="container">
            <SectionHeading title="Top events" heading="Why you join us?"/>
            <div className="top-event-wrapper">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="top-event-card top-event-one">
                            <div className="top-event-icon">
                                <img src={Icon1} alt="icon" />
                            </div>
                            <div className="top-event-text">
                                <h3>Access to events</h3>
                                <p>Labore eu sint reprehenderit amet nostrud velit enim aliquip. Nulla pariatur qui
                                    officia velit ea officia ex aliquip tempor.</p>
                                <div className="arrow-btn">
                                    <Link to="/event-details"><img src={arrow} alt="icon" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="top-event-card top-event-two">
                            <div className="top-event-icon">
                                <img src={Icon2} alt="icon" />
                            </div>
                            <div className="top-event-text">
                                <h3>Make a difference</h3>
                                <p>Labore eu sint reprehenderit amet nostrud velit enim aliquip. Nulla pariatur qui
                                    officia velit ea officia ex aliquip tempor.</p>
                                <div className="arrow-btn">
                                    <Link to="/event-details"><img src={arrow} alt="icon" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="top-event-card top-event-three">
                            <div className="top-event-icon">
                                <img src={Icon3} alt="icon" />
                            </div>
                            <div className="top-event-text">
                                <h3>Information exchange</h3>
                                <p>Labore eu sint reprehenderit amet nostrud velit enim aliquip. Nulla pariatur qui
                                    officia velit ea officia ex aliquip tempor.</p>
                                <div className="arrow-btn">
                                    <Link to="/event-details"><img src={arrow} alt="icon" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="top-event-card top-event-four">
                            <div className="top-event-icon">
                                <img src={Icon4} alt="icon" />
                            </div>
                            <div className="top-event-text">
                                <h3>Skilled speaker</h3>
                                <p>Labore eu sint reprehenderit amet nostrud velit enim aliquip. Nulla pariatur qui
                                    officia velit ea officia ex aliquip tempor.</p>
                                <div className="arrow-btn">
                                    <Link to="/event-details"><img src={arrow} alt="icon" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default TopEvents