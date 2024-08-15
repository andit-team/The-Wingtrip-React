import React from "react";
// import Section Heading
import SectionHeading from "../Common/SectionHeading";
// import Link
import { Link } from "react-router-dom";
// import Data
import { PortfolioData } from "./data";

const PortfolioArea = () => {
  return (
    <>
      <section id="portfolio-two-area" className="section-padding">
        <div className="container">
          <SectionHeading
            title="Portfolio"
            heading="Check our amazing and best portfolio"
          />
          <div className="portfolio-two-area">
            <div className="row">
                {PortfolioData.map((data, index)=>(
                     <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                     <div className="portfolio-two-card">
                       <Link to="/portfolio-details">
                         <img src={data.img} alt="img" />
                       </Link>
                       <div className="portfolio-overlay">
                         <h3>
                           <Link to="/portfolio-details">{data.heading}</Link>
                         </h3>
                         <p>{data.para}</p>
                       </div>
                     </div>
                   </div>
                ))}
             

              <div className="col-lg-12">
                <div className="portfolio-btn">
                  <button className="btn theme-btn">Load More...</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioArea;
