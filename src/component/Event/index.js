import React from 'react'
// import link
import { Link } from 'react-router-dom'
// import Section Heading
import SectionHeading from '../Common/SectionHeading'
// import Data
import { eventdata } from './data'

const EventPage = () => {
  return (
    <>
         <section id="event-area" className="section-padding">
        <div className="container">
            <SectionHeading title="Event" heading="Enjoy your desired events" />
            <div className="event-area-wrapper">
                <div className="row">
                    {eventdata.map((data, index)=>(
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                        <div className="event-card">
                            <div className="event-card-img">
                                <Link to="/event-details">
                                    <img src={data.img} alt="img" />
                                </Link>
                            </div>
                            <div className="event-card-text">
                                <h3><Link to="/event-details">{data.heading}</Link></h3>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="common-btn event-btn">
                            <button className="btn theme-btn">Load More...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default EventPage