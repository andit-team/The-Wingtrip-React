import React from 'react'
// import Img
import BannerImg from "../../../assets/img/banner/banner-img.png"

const HomeBanner = () => {
  return (
    <>
        <section id="homepage-banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="home-banner-text wow fadeInLeft animated" data-wow-delay=".4s">
                        <h4>Explore . Finance . Solution</h4>
                        <h1>International Business Conference 2023</h1>
                        <div className="home-banner-btn">
                            <a href="#!" className="btn btn_md theme-btn">Book now</a>
                            <div className="banner_video_btn">
                                <a href="#!" className="play_now" >
                                    <i className="icon fa fa-play" aria-hidden="true"></i>
                                    <span className="btn_animation"></span>
                                </a>
                                <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" className="play-now"  >
                                    <h6 className="title">See insights</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="home-banner-img wow fadeInRight animated" data-wow-delay=".4s">
                        <img src={BannerImg} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeBanner