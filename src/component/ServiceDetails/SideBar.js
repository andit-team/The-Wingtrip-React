import React from 'react'
// import Link
import { Link } from 'react-router-dom'
// import icon
import Icon from "../../assets/img/icon/serach-icon.png"

const SideBar = () => {
  return (
    <>
     <div className="col-lg-4">
                        <div className="service-details-right">
                            <div className="service-search-field">
                                <div className="service-input">
                                    <input type="text" placeholder="Search here" />
                                    <Link to="#!"><img src={Icon} alt="icon" /></Link>
                                </div>
                            </div>
                            <div className="service-rate-wraper">
                                <h3><span className="section-after">Our services</span></h3>
                                <div className="service-rate">
                                    <p><Link to="#!"><i className="fa fa-angle-right"></i> Corporate party</Link></p>
                                    <h6>21</h6>
                                </div>
                                <div className="service-rate">
                                    <p><Link to="#!"><i className="fa fa-angle-right"></i> Private party</Link></p>
                                    <h6>16</h6>
                                </div>
                                <div className="service-rate">
                                    <p><Link to="#!"><i className="fa fa-angle-right"></i> Wedding party</Link></p>
                                    <h6>25</h6>
                                </div>
                                <div className="service-rate">
                                    <p><Link to="#!"><i className="fa fa-angle-right"></i> Conference</Link></p>
                                    <h6>08</h6>
                                </div>
                                <div className="service-rate">
                                    <p><Link to="#!"><i className="fa fa-angle-right"></i> Business meeting</Link></p>
                                    <h6>17</h6>
                                </div>
                                <div className="service-rate">
                                    <p><Link to="#!"><i className="fa fa-angle-right"></i> Friends party</Link></p>
                                    <h6>28</h6>
                                </div>
                            </div>
                            <div className="service-tag-wraper wow fadeInUp animated" data-wow-delay=".8s">
                                <h3><span className="section-after">Popular tags</span></h3>
                                <div className="popular-tags">
                                    <ul>
                                        <li><Link to="/service">Party</Link></li>
                                        <li><Link to="/service">Conference</Link></li>
                                        <li><Link to="/service">Cakes</Link></li>
                                        <li><Link to="/service">Decorations</Link></li>
                                        <li><Link to="/service">Wedding party</Link></li>
                                        <li><Link to="/service">Dance</Link></li>
                                        <li><Link to="/service">Finance</Link></li>
                                        <li><Link to="/service">Warehouse </Link></li>
                                        <li><Link to="/service">Business party</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service-add-section">
                                <h2>Business conference</h2>
                                <p>Est do sit cupidatat reprehenderit sunt aliquip pariatur tempor.</p>
                                <Link className="section-after" to="#!">LEARN MORE</Link>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default SideBar