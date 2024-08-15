import React from 'react'
// import Icon 
import Icon from "../../../assets/img/icon/green-check.png"

const PricingArea = () => {
  return (
    <>
          <section id="pricing-area">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading text-white">
                        <h4>Event Pricing</h4>
                        <h2>Book your seat now</h2>
                    </div>
                </div>
            </div>
            <div className="pricing-area-wrapper">
                <div className="row g-0">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="price-card">
                            <div className="price-head">
                                <h2>Beginner</h2>
                                <div className="price">
                                    <span>$</span>
                                    <h1>40<sub>/mo</sub></h1>
                                </div>
                            </div>
                            <div className="price-list-wrapper">
                                <div className="price-list">
                                    <div className="price-icon">
                                        <img src={Icon} alt="icon" />
                                    </div>
                                    <div className="price-text">
                                        <h3>Full conference</h3>
                                        <p>(Workshop, snacks, etc.)</p>
                                    </div>
                                </div>
                                <div className="price-list">
                                    <div className="price-icon">
                                        <img src={Icon} alt="icon" />
                                    </div>
                                    <div className="price-text">
                                        <h3>Live video</h3>
                                        <p>(Can access online free)</p>
                                    </div>
                                </div>
                                <div className="price-list">
                                    <div className="price-icon">
                                        <img src={Icon} alt="icon" />
                                    </div>
                                    <div className="price-text">
                                        <h3>Meet speaker</h3>
                                        <p>(Ask question privately)</p>
                                    </div>
                                </div>
                                <div className="price-btn">
                                    <button className="btn theme-btn">Buy Ticket Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-middle">
                        <div className="price-card price-card-two">
                            <div className="price-head">
                                <h2>Advanced</h2>
                                <div className="price">
                                    <span>$</span>
                                    <h1>80<sub>/mo</sub></h1>
                                </div>
                            </div>
                            <div className="price-list-wrapper">
                                <div className="price-list">
                                    <div className="price-icon">
                                        <img src={Icon} alt="icon" />
                                    </div>
                                    <div className="price-text">
                                        <h3>Full conference</h3>
                                        <p>(Workshop, snacks, etc.)</p>
                                    </div>
                                </div>
                                <div className="price-list">
                                    <div className="price-icon">
                                        <img src={Icon} alt="icon" />
                                    </div>
                                    <div className="price-text">
                                        <h3>Live video</h3>
                                        <p>(Can access online free)</p>
                                    </div>
                                </div>
                                <div className="price-list">
                                    <div className="price-icon">
                                        <img src={Icon} alt="icon" />
                                    </div>
                                    <div className="price-text">
                                        <h3>Meet speaker</h3>
                                        <p>(Ask question privately)</p>
                                    </div>
                                </div>
                                <div className="price-btn">
                                    <button className="btn theme-btn">Buy Ticket Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="price-card">
                            <div className="price-head">
                                <h2>Premium</h2>
                                <div className="price">
                                    <span>$</span>
                                    <h1>120<sub>/mo</sub></h1>
                                </div>
                            </div>
                            <div className="price-list-wrapper">
                                <div className="price-list">
                                    <div className="price-icon">
                                        <img src={Icon} alt="icon" />
                                    </div>
                                    <div className="price-text">
                                        <h3>Full conference</h3>
                                        <p>(Workshop, snacks, etc.)</p>
                                    </div>
                                </div>
                                <div className="price-list">
                                    <div className="price-icon">
                                        <img src={Icon} alt="icon" />
                                    </div>
                                    <div className="price-text">
                                        <h3>Live video</h3>
                                        <p>(Can access online free)</p>
                                    </div>
                                </div>
                                <div className="price-list">
                                    <div className="price-icon">
                                        <img src={Icon} alt="icon" />
                                    </div>
                                    <div className="price-text">
                                        <h3>Meet speaker</h3>
                                        <p>(Ask question privately)</p>
                                    </div>
                                </div>
                                <div className="price-btn">
                                    <button className="btn theme-btn">Buy Ticket Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PricingArea