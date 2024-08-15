import React from "react";
// import img
import img1 from "../../../assets/img/about/about-left.png";
import img2 from "../../../assets/img/about/about-dote-img.png";
import icon from "../../../assets/img/icon/about-check.png";
import signature from "../../../assets/img/icon/signature.png";

const TopMusic = () => {
  return (
    <>
      <section id="about-area">
        <div className="container">
          <div className="about-section-wraper">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="about-right-img">
                  <img src={img1} alt="img" />
                </div>
                <div className="about-dote-img">
                  <img src={img2} alt="img" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="about-page-right-wrapper">
                  <div className="about-head">
                    <h4>Top music events</h4>
                    <h2>
                      Welcome to the world’s largest music events festival
                    </h2>
                  </div>
                  <div className="about-content">
                    <p>
                      Laboris anim duis sunt aliquip tempor qui. Est in nulla
                      eiusmod ad aliqua laboris jugni lol occaecat excepteur
                      voluptate. Eiusmod enim ea minim occaecat in occaecat
                      occaecat. Adipisicing velit aute duis pariatur minim
                      officia officia velit nostrud ipsum ullamco anim aute sint
                      reprehenderit nulla enim.
                    </p>

                    <div className="about-list">
                      <div className="about-list-item">
                        <ul>
                          <li>
                            <img src={icon} alt="icon" />
                            Est in nulla eiusmod ad aliqua.
                          </li>
                          <li>
                            <img src={icon} alt="icon" />
                            Non pariatur sint culpa.
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <img src={icon} alt="icon" />
                            Eiusmod in nulla ead aliqua blul.
                          </li>
                          <li>
                            <img src={icon} alt="icon" />
                            Culpa nisi ullamco reprehrit et.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="about-para">
                      Est in nulla eiusmod ad aliqua laboris jugni lol occaecat
                      excepteur voluptate. Eiu fredoka rel more denim ea minim
                      occaecat in occaecat occaecat.
                    </p>
                    <div className="about-two-author">
                      <div className="sognature">
                        <img src={signature} alt="icon" />
                      </div>
                      <div className="about-bottom-right">
                        <h4>Bishop homicon</h4>
                        <p>(Chairman and founder)</p>
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

export default TopMusic;
