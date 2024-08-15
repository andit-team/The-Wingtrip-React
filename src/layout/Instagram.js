import React from 'react'
// import link
import { Link } from 'react-router-dom'
//  OwlCarousel Slider Import
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// img import
import img1 from "../assets/img/instagram/instagram-1.png"
import img2 from "../assets/img/instagram/instagram-2.png"
import img3 from "../assets/img/instagram/instagram-3.png"
import img4 from "../assets/img/instagram/instagram-4.png"
import img5 from "../assets/img/instagram/instagram-5.png"

const InstagramSlider = () => {
    const instData = [
        { img:img1 },
        { img:img2 },
        { img:img3 },
        { img:img4 },
        { img:img5 }
    ];
      // Slider Handelar
      let responsive = {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        960: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      };
  return (
    <>
        <section id="instgram-area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">

                    <div className="instagram-slider-wrapper">
                    <OwlCarousel
                  className="owl-theme"
                  responsive={responsive}
                  autoplay={false}
                  autoplayHoverPause={true}
                  autoplayTimeout={2500}
                  loop={true}
                  margin={0}
                  nav={false}
                  dots={false}
                >
                    {instData.map((data, index)=>(
                        <div className="instagram-item" key={index}>
                        <Link to="#!">
                            <i className="fab fa-instagram"></i>
                            <img src={data.img} alt="img" />
                        </Link>
                    </div>
                    ))}
                </OwlCarousel>
                        
                    </div>
                </div>
            </div>
        </div>
        <h2 className="d-none">heading</h2>
    </section>
    </>
  )
}

export default InstagramSlider