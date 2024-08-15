import React from 'react'
// import Link
import { Link } from 'react-router-dom'
// import Icon
import Icon from "../../assets/img/icon/navbar-search.png"

const ComingSoonArea = () => {
  return (
    <>
        <section id="coming_soon" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="coming_soon_area_wrapper">
                        <h2>Under Construction</h2>
                        <p>Accusantium debitis! Hic dolorum at ab magnam, facere omnis placeat architecto neque
                            provident dicta molestias. Cumque earum sit sed soluta dolorum.</p>
                        <div className="coming_soon_clock_area">
                            <div className="round-clock">
                                <h2 id="day">123</h2>
                                <p>day</p>
                            </div>
                            <div className="round-clock">
                                <h2 id="hrs">OO</h2>
                                <p>Hours</p>
                            </div>
                            <div className="round-clock">
                                <h2 id="min">O0</h2>
                                <p>Minutes</p>
                            </div>
                            <div className="round-clock">
                                <h2 id="sec">OO</h2>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <div>
                            <form action="#!">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-white" placeholder="Search . . ."
                                        aria-label="Recipient's username" />
                                    <button className="btn theme-btn btn-subscribe">
                                        <img src={Icon} alt="icon" /></button>
                                </div>
                            </form>
                        </div>
                        <div className="up_comming_btn">
                            <Link className="btn theme-btn" to="/">Go To Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ComingSoonArea