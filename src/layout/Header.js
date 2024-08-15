import React from "react";
// import Link
import { Link } from "react-router-dom";
// import Data
import { HeaderData } from "./HeaderData";
// import logo
import Logo from "../assets/img/navbar-logo.png";
import Logo2 from "../assets/img/footer-logo.png"
// import icon
import Icon1 from "../assets/img/icon/navbar-search.png";
import Icon2 from "../assets/img/icon/menubar.png";

const Header = () => {
  return (
    <>
      <header className="main-header-arae">
        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <Link to="/">
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="main-navbar">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link className="navbar-brand" to="/">
                  <img src={Logo} alt="logo" />
                </Link>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    {HeaderData.map((data, index) => (
                      <li className="nav-item" key={index}>
                        <Link to={data.link} className="nav-link">
                          {data.menu}
                          {data.submenu && (
                            <i className="fas fa-angle-down"></i>
                          )}
                        </Link>
                        {data.submenu && (
                          <ul className="dropdown-menu">
                            {data.subMenuitem.map((item1, index1) => (
                              <li className="nav-item" key={index1}>
                                <Link to={item1.linkL} className="nav-link">
                                  {item1.subItem}
                                </Link>
                                {item1.subMenuitems && (
                                  <ul className="dropdown-menu">
                                    {item1.subMenuitems.map((item2, index2) => (
                                      <li className="nav-item" key={index2}>
                                        <Link to={item2.linkL} className="nav-link">
                                          {item2.subItem}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="!#" className="search-box">
                        <img src={Icon1} alt="icon" />
                      </a>
                    </div>
                    <div className="option-item">
                      <a
                        href="#!"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        <img src={Icon2} alt="icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="others-option-for-responsive">
            <div className="container">
              <div className="dot-menu">
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <a href="!#" className="search-box">
                      <img src={Icon1} alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="offcanvas offcanvas-end offcanvas_custom"
        tabIndex="-1"
        id="offcanvasRight"
      >
        <div className="offcanvas-header">
          <img src={Logo2} alt="img" />
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas_right_wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut tur incidunt ut labore et
            </p>
            <h4>Contact Us</h4>
            <div className="top_bar_left_item">
              <div className="top_Bar_left_icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="top_Bar_left_text">
                <h5>
                  <a href="mailto:donation@domain.com">donation@domain.com</a>
                </h5>
                <h6>Get free estimate</h6>
              </div>
            </div>
            <div className="top_bar_left_item">
              <div className="top_Bar_left_icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="top_Bar_left_text">
                <h5>
                  <a href="tel:+011-234-567-89">+011 234 567 89</a>
                </h5>
                <h6>Sat to Fri: 8:00am to 10pm</h6>
              </div>
            </div>
            <div className="top_bar_left_item">
              <div className="top_Bar_left_icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="top_Bar_left_text">
                <h5>32, New street road, New castle.</h5>
                <h6>Get direction</h6>
              </div>
            </div>
            <div className="offcanvas_follow_area">
              <h5>Follow Us</h5>
              {/* <ul>
                        <li><a href="#!"><img src="assets/img/icon/facebook-foot.png" alt="icon"></a></li>
                        <li><a href="#!"><img src="assets/img/icon/twiter-foot.png" alt="icon"></a></li>
                        <li><a href="#!"><img src="assets/img/icon/instagram-foot.png" alt="icon"></a></li>
                        <li><a href="#!"><img src="assets/img/icon/linkedin-foot.png" alt="icon"></a></li>
                    </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
