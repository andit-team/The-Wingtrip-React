import React from 'react'
// import icon
import icon1 from "../../assets/img/icon/contact-call.png"
import icon2 from "../../assets/img/icon/contact-email.png"
import icon3 from "../../assets/img/icon/contact-location.png"
// import From
import ContactFrom from './From'
// import Link
import { Link } from 'react-router-dom'

const ContactArea = () => {
  return (
    <>
          <section id="contact-page" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading text-center">
                        <h4> Contact us </h4>
                        <h2>Get in touch</h2>
                    </div>
                </div>
            </div>
        
            <div className="contact-top">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-card-wraper">
                            <div className="contact-img">
                                <a href="#!"><img src={icon1} alt="icon" /></a>
                            </div>
                            <h3>Contact number</h3>
                            <p><Link to="tel:+01-123-456-789">+01 123 456 789</Link></p>
                            <p><Link to="tel:+01-123-456-789">+02 345 678 901</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-card-wraper">
                            <div className="contact-img">
                                <a href="#!"><img src={icon2} alt="icon" /></a>
                            </div>
                            <h3>Send us mail</h3>
                            <p><Link to="mailto:support@domain.com">support@domain.com</Link></p>
                            <p><Link to="mailto:support@domain.com">contact@domain.com</Link></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-card-wraper">
                            <div className="contact-img">
                                <Link to="#!"><img src={icon3} alt="icon" /></Link>
                            </div>
                            <h3>Our location</h3>
                            <p>4517 Washington Ave. Manchester, Kentucky 39495, USA.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-details-wraper">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="our-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663570607!2d89.56355961427838!3d22.813715829827952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sAnd+IT!5e0!3m2!1sen!2sbd!4v1557901943656!5m2!1sen!2sbd"  title="myFrame"></iframe>
                        </div>
                    </div>
                    <ContactFrom/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactArea