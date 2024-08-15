import React from 'react'
//  OwlCarousel Slider Import
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Data
import { TestimonialData } from './data';

const TestimonialArea = () => {
      // Slider Handelar
      let responsive = {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        960: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      };
  return (
    <>
          <section id="testimonial-area" className="slider-slide-btn">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-8 offset-lg-2">
                    <div className="testimonial-slider-wrapper">
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
                   {TestimonialData.map((data, index)=>(
                    <div className="testimonial-card" key={index}>
                            <div className="testimonial-icon">
                                <ul>
                                    <li><img src={data.quot} alt="icon" /></li>
                                </ul>
                            </div>
                            <div className="testimonial-text">
                                <p>{data.para}</p>
                                <div className="testimonial-img">
                                    <img src={data.img} alt="img" />
                                </div>
                            </div>
                            <div className="author-info">
                                <h3>{data.name}</h3>
                                <p>{data.des}</p>
                            </div>
                        </div>
                         ))}
                </OwlCarousel>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TestimonialArea