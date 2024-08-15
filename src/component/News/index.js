import React from 'react'
// import Data
import { NewsData } from './data'
// import Link
import { Link } from 'react-router-dom'
// import SectionHeading
import SectionHeading from '../Common/SectionHeading'

const NewsArea = () => {
  return (
    <>
            <section id="latest-news-area" className="section-padding">
        <div className="container">
            <SectionHeading title="News" heading="Our latest news & article" />
            <div className="latest-news-wrapper">
                <div className="row">
                    {NewsData.map((data, index)=>(
                         <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                         <div className="news-card">
                             <div className="news-img">
                                 <Link to="/news-details"><img src={data.img} alt="img" /></Link>
                             </div>
                             <div className="news-card-text">
                                 <div className="news-date">
                                     <h3>{data.date} <span>{data.month}</span></h3>
                                 </div>
                                 <div className="news-info">
                                     <h3><Link to="/news-details">{data.heading}</Link> </h3>
                                     <p>{data.para}</p>
                                     <Link to="/news-details">Read More ...</Link>
                                 </div>
                             </div>
                         </div>
                     </div>
                    ))}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="common-btn news-btn">
                        <button className="btn theme-btn">Load More...</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default NewsArea