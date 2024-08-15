import React from 'react'
// Import Link
import { Link } from 'react-router-dom'
// import Img
import img1 from "../../assets/img/common/error-page-image.png"

const ErrorArea = () => {
  return (
    <>
         <section id="error-page" className="section-padding-bottom">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-12">
                    <div className="error-page-wrapper">
                        <div className="error-img">
                            <img src={img1} alt="img" />
                        </div>
                        <div className="error-text">
                            <h2>Page not found!</h2>
                            <p>Sorry we can't find that page! The page you are lookingfor was never existed.</p>
                            <div className="error-btn">
                                <Link className="btn theme-btn" to="/">Go To Homepage</Link>
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

export default ErrorArea