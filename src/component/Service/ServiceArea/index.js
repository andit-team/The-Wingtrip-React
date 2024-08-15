import React from 'react'
// import Section Heading
import SectionHeading from '../../Common/SectionHeading'
// import Data
import { eventdata } from '../../Event/data'
// import Link
import { Link } from 'react-router-dom'

const ServicesArea = () => {
  return (
    <>
      <section id="service-area">
        <div className="container">
            <SectionHeading title="Our services" heading="We provide the best services"/>
            <div className="service-area-wrapper">
                <div className="row">
                {eventdata.map((data, index)=>(
                     <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                     <div className="service-card">
                         <div className="service-img">
                             <Link to="/service-details"><img src={data.img} alt="img" /></Link>
                         </div>
                         <div className="service-text">
                             <h3><Link to="/service-details">{data.heading}</Link></h3>
                             <p>{data.para}</p>
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

export default ServicesArea