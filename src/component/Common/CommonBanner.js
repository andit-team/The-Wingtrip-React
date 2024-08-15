import React from 'react'
// import link
import { Link } from 'react-router-dom'

const CommonBanner = (props) => {
  return (
    <>
    <section id="common-banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="common-banner-page text-center">
                        <h2>{props.heading}</h2>
                        <ul className="common-banner-page-link">
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li className="active-page">{props.pagination}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default CommonBanner