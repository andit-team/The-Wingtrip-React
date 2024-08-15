import React from 'react'
// import Link
import { Link } from 'react-router-dom'
// import Section Heading
import SectionHeading from '../Common/SectionHeading'
// import Img
import img1 from "../../assets/img/gallery/gallery-1.png"
import img2 from "../../assets/img/gallery/gallery-2.png"
import img3 from "../../assets/img/gallery/gallery-3.png"
import img4 from "../../assets/img/gallery/gallery-4.png"
import img5 from "../../assets/img/gallery/gallery-5.png"
import img6 from "../../assets/img/gallery/gallery-6.png"

const GalleryArea = () => {
  return (
    <>
          <section id="gallery-area" className="section-padding">
        <div className="container">
            <SectionHeading title="Photo gallery" heading="Explore our recent photo gallery" />
            <div className="row">
                <div className="col-lg-6">
                    <div className="gallery-left-side">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="gallery-card gallery-one">
                                    <div className="gallery-img">
                                        <Link to="#!"><img src={img1} alt="img" /></Link>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                                <div className="gallery-card">
                                    <div className="gallery-img">
                                         <Link to="#!"><img src={img2} alt="img" /></Link>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="gallery-card">
                                    <div className="gallery-img">
                                         <Link to="#!"><img src={img3} alt="img" /></Link>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="gallery-right-side">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="gallery-card gallery-one">
                                    <div className="gallery-img">
                                         <Link to="#!"><img src={img4} alt="img" /></Link>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="gallery-card">
                                    <div className="gallery-img">
                                         <Link to="#!"><img src={img5} alt="img" /></Link>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="gallery-card">
                                    <div className="gallery-img">
                                         <Link to="#!"><img src={img6} alt="img" /></Link>
                                    </div>
                                    <div className="gallery-text">
                                        <h5>Concert in germany 2022</h5>
                                        <p>Aute conse dolor sit id.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="common-btn">
                        <button className="btn theme-btn">Load More...</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default GalleryArea