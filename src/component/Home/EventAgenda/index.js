import React from "react";
// improt Link
import { Link } from "react-router-dom";
// import SectionHeading
import SectionHeading from "../../Common/SectionHeading";
// imprt Data
import { eventdata } from "../../Event/data";

const EventAgenda = () => {

  return (
    <>
      <section id="event-agenda">
        <div className="container">
          {/* SectionHeading */}
          <SectionHeading
            title="Event agenda"
            heading="Improve your skill with workshops"
          />
          <div className="event-agenda-wrapper">
            <div className="row">
                {eventdata.slice(0, 3).map((data, index)=>(
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                    <div className="event-agenda-card">
                      <div className="event-agenda-img">
                        <Link to="#!">
                          <img src={data.img} alt="img" />
                        </Link>
                      </div>
                      <div className="event-agenda-text">
                        <h3>
                          <Link to="#!">{data.heading}</Link>
                        </h3>
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
  );
};

export default EventAgenda;
