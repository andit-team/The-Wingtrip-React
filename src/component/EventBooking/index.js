import React from 'react'
// import img
import img from "../../assets/img/common/conference.png"

const EventBooking = () => {
  return (
    <>
        <section id="event_booking_area" className="section-padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                   <div className="event_booking_info">
                    <div className="checkout_area_bg">
                        <div className="check-heading">
                            <h3>Request a Schedule</h3>
                        </div>
                        <div className="check-out-form">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <input type="text" required="" className="form-control" id="fname"
                                                placeholder="First name *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <input type="text" required="" className="form-control" id="lname"
                                                placeholder="Last name *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <input className="form-control" required="" type="text" id="email"
                                                placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <input type="text" className="form-control" id="phone" required=""
                                                placeholder="Enter phone number.." />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <select className="form-control first_null" id="country">
                                                <option value="">Select an option...</option>
                                                <option value="AX">usa</option>
                                                <option value="AF">Afghanistan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <input type="date" className="form-control" id="date" required=""
                                                placeholder="Booking date .." />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <textarea rows="5" className="form-control" id="messages"
                                                placeholder="Additional notes"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="portfolio-btn">
                                            <button className="btn theme-btn">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                   </div> 
                </div>
                <div className="col-lg-6">
                    <div className="event_booking_img" >
                        <img src={img} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default EventBooking