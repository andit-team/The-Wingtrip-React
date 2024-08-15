import React from 'react'
// import Link
import { Link } from 'react-router-dom'
// import Data
import { ProductData } from './data'

const ProductArea = () => {
  return (
    <>
        <section id="product_page" className="section-padding">
        <div className="container">
            <div className="row">
                {ProductData.map((data, index)=>(
                      <div className="col-lg-3 col-md-6 col-sm-12"  key={index}>
                      <div className="product_card_item">
                          <div className="product_img">
                              <img src={data.img} alt="img" />
                              <ul className="product_social_icon">
                                  <li><i className="far fa-heart"></i></li>
                                  <li><i className="fas fa-cart-arrow-down"></i></li>
                                  <li><i className="fas fa-eye"></i></li>
                              </ul>
                        {data.tag === true ? (
                              <div className="badge_area">
                              <h5 className="badge">sell</h5>
                          </div>

                        ):("")}
                            
                          </div>
                          <div className="product_info">
                              <div className="product_ratings">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                              <h3><Link to="/cart">{data.heading}</Link></h3>
                              <h6>{data.price}</h6>
                          </div>
                      </div>
                  </div>
                ))}
              
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductArea