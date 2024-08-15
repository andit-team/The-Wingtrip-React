import React from 'react'
// import img
import img from "../../../assets/img/common/conference.png"
// import Link
import { Link } from 'react-router-dom'

const BusinessConferenceArea = () => {
  return (
    <>
         <section id="business-conference-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="conference-img">
                        <img src={img} alt="img" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="business-conference-wrapper">
                        <h2><span>20th</span> <span> International</span> <span>Business Conference</span></h2>
                        <p>Ad enim consectetur est amet dolore eiusmod ad nulla anim eu excepteur mollit cillum. Veniam
                            deserunt nulla sunt occaecat Lorem nulla incididunt nostrud. Ea id laborum quis ullamco
                            adipisicing culpa duis labore ea et fugiat occaecat ipsum labore. Consequat cillum nostrud
                            id duis ex consectetur ipsum.</p>
                    </div>
                    <div className="clock-area-wrapper">
                        <div className="clock-details">
                            <div className="clock-area">
                                <h2 id="day">00</h2>
                            </div>
                            <p>Days</p>
                        </div>
                        <div className="clock-details">
                            <div className="clock-area">
                                <h2 id="hrs">00</h2>
                            </div>
                            <p>Hours</p>
                        </div>
                        <div className="clock-details">
                            <div className="clock-area">
                                <h2 id="min">00</h2>
                            </div>
                            <p>Minutes</p>
                        </div>
                        <div className="clock-details">
                            <div className="clock-area">
                                <h2 id="sec">00</h2>
                            </div>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <div className="conference-bottom-btn">
                        <Link className="btn theme-btn" to="#!">Discover Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BusinessConferenceArea