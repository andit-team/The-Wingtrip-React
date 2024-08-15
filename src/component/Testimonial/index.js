import React from 'react'
// import Data
import { TestData } from './data';
//  OwlCarousel Slider Import
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TestimonialMainArea = () => {
      // Slider Handelar
      let responsive = {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        960: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      };
  return (
    <>
    <section id="testimonial_page_wrapper" className="section-padding dote_btn">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="testi_slider_two">  
                    <OwlCarousel
                  className="owl-theme"
                  responsive={responsive}
                  autoplay={false}
                  autoplayHoverPause={true}
                  autoplayTimeout={2500}
                  loop={true}
                  margin={30}
                  nav={false}
                  dots={false}
                >  
                {TestData.map((data, index)=>(
                     <div className="testimonial_three_boxed" key={index}>
                     <div className="testi_img_box">
                         <div className="testi_two_img">
                             <img src={data.img} alt="img" />
                         </div>
                         <div className="testi_two_quote_img">
                             <img src={data.quote} alt="icon" className="test_quate_area" />
                         </div>
                     </div>
                     <p>{data.para}</p>
                     <div className="test_three_bottom">
                         <div className="test_three_bottom_left">
                             <h3>{data.name}</h3>
                             <h6>{data.des}</h6>
                         </div>
                         <div className="test_three_bottom_right">
                             <div className="test_three_icon">
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                             </div>
                             <h6>{data.rate}</h6>
                         </div>
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

export default TestimonialMainArea