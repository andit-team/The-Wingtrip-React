import React from 'react'
// import data
import { AllServiceData } from './data'
// import Section Heading
import SectionHeading from '../../Common/SectionHeading'

const AllService = () => {
  return (
    <>
         <section id="best-service-area" className="section-padding">
        <div className="container">
            <SectionHeading title="We are best" heading="All services in one place"/>
            <div className="best-service-card-wrapper">
                <div className="row">
                    {AllServiceData.map((data, index)=>(
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                        <div  className={ data.border === false ? "best-service-card" : "best-service-card border-0"}>
                            <img src={data.img} alt="icon" />
                            <h3>{data.heading}</h3>
                            <p>{data.para}</p>
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

export default AllService