import React from "react";
// import icon
import { ScheduleData } from "./data";
// import section heading
import SectionHeading from "../../Common/SectionHeading";

const Schedule = () => {
  return (
    <>
       <section id="event-schedule-area" className="section-padding">
        <div className="container">
        <SectionHeading
            title="Schedule of event"
            heading="List of planned events they are expected"
          />
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="event-schedule-wrapper">
                        <div className="schedule-list nav nav-pills" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <button className="schedule-link nav-link active" id="v-pills-first-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-first" type="button" role="tab" aria-controls="v-pills-first"
                                aria-selected="true">Day 01 <br /> <span>Monday, May 08,
                                    2023</span></button>
                            <button className="nav-link schedule-link" id="v-pills-second-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-second" type="button" role="tab" aria-controls="v-pills-second"
                                aria-selected="false">Day 02 <br /> <span>Tuesday, May
                                    09, 2023</span></button>
                            <button className="nav-link schedule-link" id="v-pills-third-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-third" type="button" role="tab" aria-controls="v-pills-third"
                                aria-selected="false">Day 03 <br /> <span>Wednesday, May
                                    10, 2023</span></button>
                        </div>
                        <div className="tab-content schedule-content-wrapper" id="v-pills-tabContent">
                            <div className="tab-pane fade show active schedule-text" id="v-pills-first" role="tabpanel"
                                aria-labelledby="v-pills-first-tab">
                                <div className="schedule-right-side-wrapper">
                                    {ScheduleData.map((data, index)=>(
                                          <div className="schedule-card" key={index}>
                                          <div className="row">
                                              <div className="col-lg-4 col-md-4">
                                                  <div className="schedule-time">
                                                      <div className="schedule-time-img">
                                                          <img src={data.icons} alt="icon" />
                                                      </div>
                                                      <p>{data.time}</p>
                                                  </div>
                                              </div>
                                              <div className="col-lg-8 col-md-8">
                                                  <div className="schedule-details">
                                                      <h6>{data.head}</h6>
                                                      <p>{data.para}</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                    ))}
                                  
                                  
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Schedule;
