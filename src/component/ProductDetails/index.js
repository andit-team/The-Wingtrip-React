import React from "react";
// import img
import Img1 from "../../assets/img/product/product-1.jpg";
import Img2 from "../../assets/img/product/product-2.jpg";
import Img3 from "../../assets/img/product/product-3.jpg";
import Img4 from "../../assets/img/product/product-4.jpg";
import Comnt1 from "../../assets/img/blog/claient-1.png";
import Comnt2 from "../../assets/img/blog/claient-2.png";
// import Link
import { Link } from "react-router-dom";

//  OwlCarousel Slider Import
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProductDetailsArea = () => {
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
  //   item data
  const ItemData = [{ img: Img1 }, { img: Img2 }, { img: Img3 }, { img: Img4 }];
  return (
    <>
      <section id="product_details_area" className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="product_slider_wrapper">
                <div className="product-d-slider">
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
                    {ItemData.map((data, index) => (
                      <div className="produc" key={index}>
                        <img src={data.img} alt="img" />
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="product_details_head">
                <h3>Top Collection Product</h3>
                <div className="product_rating product_d_rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <h6>2 Reviews</h6>
                </div>
                <h4>$76.99</h4>
              </div>
              <hr />
              <div className="product_details_content">
                <p>
                  Aliquam asperiores beatae fuga harum gui laboriosam maiores
                  quasi quidem quo repudiandae voluptate. Lorem ipsum dolor sit
                  amet, denos consectetur adipisicing elit. Aliquam asperiores
                  beatae fuga harum laboriosam maio. repudiandae voluptate.
                  Lorem ipsum dolor sit ame. denos consectetur adipisicing elit.
                  Aliquam asperiores beatae fuga harum laboriosam maio.
                  repudiandae voluptate. Lorem ipsum dolor sit ame
                </p>
                <p className="product_d_para">
                  Lorem ipsum dolor sit amet, denos consectetur adipisicing
                  elit. Aliquam asperiores beatae fuga harum laboriosam maio.
                  repudiandae voluptate. Lorem ipsum dolor sit ame.
                </p>
                <div className="product_tag_area">
                  <p>
                    <strong>SKU :</strong> Coffee - Mug
                  </p>
                  <p>
                    <strong>Category :</strong> Event Conference
                  </p>
                  <p>
                    <strong>Tag</strong> Mug Gift
                  </p>
                </div>
              </div>
              <div className="product_quantity_area">
                <h4>Choose quantity</h4>
                <div className="plus-minus-input">
                  <div className="input-group-button">
                    <button
                      type="button"
                      className="button"
                      data-quantity="minus"
                      data-field="quantity"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    name="quantity"
                  />
                  <div className="input-group-button">
                    <button
                      type="button"
                      className="button"
                      data-quantity="plus"
                      data-field="quantity"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="shop_details_btn_area">
                <Link className="btn theme-btn" to="/cart">
                  Add To Cart
                </Link>
                <Link className="white_list_btn" to="#!">
                  <i className="far fa-heart"></i> Add To Whitelist
                </Link>
              </div>
            </div>
          </div>
          <div className="product_details_tab_area">
            <div className="row">
              <div className="col-lg-12">
                <div className="product_details_tabs">
                  <ul className="nav nav-tabs product_tab_button">
                    <li>
                      <Link
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        to="#!"
                        className="active"
                      >
                        Description
                      </Link>
                    </li>
                    <li>
                      <Link
                        data-bs-toggle="tab"
                        data-bs-target="#review"
                        to="#!"
                      >
                        Review
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content product_tab_content">
                    <div id="description" className="tab-pane fade in show active">
                      <div className="product_description">
                        <p>
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Vestibulum ac diam sit amet quam
                          vehicula elementum sed sit amet dui. Sed porttitor
                          lectus nibh. Vivamus magna justo, lacinia eget
                          consectetur sed, convallis at tellus. Sed porttitor
                          lectus nibh. Donec sollicitudin molestie malesuada.
                          Vivamus magna justo, lacinia eget consectetur sed,
                          convallis at tellus. Curabitur arcu erat, accumsan id
                          imperdiet et, porttitor at sem.
                        </p>
                        <ul className="product_details_list">
                          <li>
                            <i className="fas fa-check-circle"></i> Nam at elit nec
                            neque suscipit gravida.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i> Curabitur
                            aliquet quam id dui posuere blandit
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i> Vivamus magna
                            justo, lacinia eget consectetur sed
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i> Aenean egestas
                            orci eu maximus tincidunt.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i> Mauris blandit
                            aliquet elit, eget tincidunt nibh pulvinar{" "}
                          </li>
                        </ul>
                        <p>
                          Donec sollicitudin molestie malesuada. Cras ultricies
                          ligula sed magna dictum porta. Mauris blandit aliquet
                          elit, eget tincidunt nibh pulvinar a. Nulla porttitor
                          accumsan tincidunt. Cras ultricies ligula sed magna
                          dictum porta. Curabitur arcu erat, accumsan id
                          imperdiet et, Pellentesque in ipsum id orci porta
                          dapibus. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. porttitor at sem. Quisque velit nisi,
                          pretium ut lacinia in, elementum id enim.
                        </p>
                      </div>
                    </div>
                    <div id="review" className="tab-pane">
                      <div className="comment-area-details">
                        <h3>2 Comments</h3>
                        <div className="post-comment-wrapper">
                          <div className="post-comment-item">
                            <div className="post-comment-img">
                              <img
                                src={Comnt1}
                                alt="img"
                              />
                            </div>
                            <div className="post-comment-text">
                              <div className="post-names-replay">
                                <h5>James martin</h5>
                                <Link to="#!">
                                  <i className="fas fa-reply"></i>Reply
                                </Link>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, cibo mundi ea duo,
                                vim exerci phaedrum. There are many variations
                                of passages of Lorem Ipsum available but the
                                majority.
                              </p>
                            </div>
                          </div>
                          <div className="post-comment-item">
                            <div className="post-comment-img">
                              <img
                                src={Comnt2}
                                alt="img"
                              />
                            </div>
                            <div className="post-comment-text">
                              <div className="post-names-replay">
                                <h5>James martin</h5>
                                <Link to="#!">
                                  <i className="fas fa-reply"></i>Reply
                                </Link>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, cibo mundi ea duo,
                                vim exerci phaedrum. There are many variations
                                of passages of Lorem Ipsum available but the
                                majority.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsArea;
