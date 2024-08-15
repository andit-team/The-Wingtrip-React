import React from 'react'
// import Link
import { Link } from 'react-router-dom'
// import img
import icon1 from "../../../assets/img/icon/event-date.png"
import icon2 from "../../../assets/img/icon/event-location.png"
import img from "../../../assets/img/event/information-right.png"

const JoinEvents = () => {
  return (
    <>
        <section id="evet-information-area" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="event-infrmation-details">
                        <div className="event-information-top-text">
                            <h4>Why join events</h4>
                            <h2>You should join the event</h2>
                            <p>Cupidatat sunt excepteur ipsum non. Ex consectetur amet eu commodo incididunt elit
                                incididunt
                                aliqua aliqua irure elit minim voluptate. Sit est nisi labore eiusmod et ad. Anim quis
                                anim
                                adipisicing quis cillum id ullamco officia do culpa voluptate exercitation nisi. Sit
                                laborum
                                quis veniam nulla dolore consequat ea cupidatat cupidatat sunt exercitation.</p>
                        </div>
                        <div className="event-information-middle">
                            <div className="event-information-box">
                                <div className="event-date-img">
                                    <img src={icon1} alt="icon" />
                                </div>
                                <div className="event-information-text">
                                    <h3>Event date</h3>
                                    <p>Dolore aute voluptate laboris sint reprehenderit duis labore exercitation cepteur
                                        amet liqua velit exercitation et cupidatat elit. <a
                                            href="event-details.html">Learn
                                            more...</a></p>
                                </div>
                            </div>
                            <div className="event-information-box">
                                <div className="event-location-img">
                                    <img src={icon2} alt="icon" />
                                </div>
                                <div className="event-information-text">
                                    <h3>Event venue</h3>
                                    <p>Nostrud fugiat minim voluptate ullamco. Consectetur liqua velit exercitation et
                                        cupidatat elit quis cillum veniam sit ommodo <a href="event-details.html">Learn
                                            more...</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="event-information-btn">
                            <Link className="btn theme-btn" to="#!">Buy Ticket Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="event-infrmation-img">
                        <img src={img} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default JoinEvents