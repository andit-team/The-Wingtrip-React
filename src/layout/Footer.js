import React from 'react'
// import Footer logo
import Logo from "../assets/img/footer-logo.png"
import social1 from "../assets/img/icon/facebook-foot.png"
import social2 from "../assets/img/icon/twiter-foot.png"
import social3 from "../assets/img/icon/instagram-foot.png"
import social4 from "../assets/img/icon/linkedin-foot.png"
// import Data
import { FooterData } from './FooterData'
import { Link } from 'react-router-dom'

const FooterArea = () => {
  return (
    <>
        <footer id="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="footer-about-area">
                        <div className="footer-logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <p>I appreciate your amazing services and professional staff for all your hard work and creative
                            thinking.</p>
                        <div className="subscribe-area">
                            <h5>Subscribe to our newsletter</h5>
                            <form action="#!">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-white" placeholder="Enter your email"
                                        aria-label="Recipient's username" />
                                    <button className="btn theme-btn btn-subscribe">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        {FooterData.map((data, index)=>(
                            <div className="col-lg-4 col-md-4 col-sm-4" key={index}>
                            <div className="footer-navitem-area">
                                <h3><span className="section-after">{data.heading}</span></h3>
                                <div className="nav-item-footer">
                                    <ul>
                                        {data.item.map((datas, index1)=>(
                                             <li key={index1}><Link to={datas.linkL}>{datas.FItem}</Link></li>
                                        ))}
                                       
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="footer-navitem-area">
                        <h3><span className="section-after">Need any help?</span></h3>
                        <div className="footer-contact">
                            <div className="footer-contact-item">
                                <p>Call 24/7 for any help</p>
                                <h3><Link to="tel:+00-123-456-789">+00 123 456 789</Link></h3>
                            </div>
                            <div className="footer-contact-item">
                                <p>Mail to our support team</p>
                                <h3><Link href="mailto:support@domain.com">support@domain.com</Link></h3>
                            </div>
                            <div className="footer-contact-item">
                                <p>Follow us on</p>
                                <div className="footer-social-icon">
                                    <ul>
                                        <li><Link to="#!"><img src={social1} alt="icon" /></Link>
                                        </li>
                                        <li><Link to="#!"><img src={social2} alt="icon" /></Link></li>
                                        <li><Link to="#!"><img src={social3} alt="icon" /></Link>
                                        </li>
                                        <li><Link to="#!"><img src={social4} alt="icon" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default FooterArea