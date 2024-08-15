import React from "react";
// import Img
import img1 from "../../../assets/img/icon/counter-1.png";
import img2 from "../../../assets/img/icon/counter-2.png";
import img3 from "../../../assets/img/icon/counter-3.png";
import img4 from "../../../assets/img/icon/counter-4.png";
// import Counter
import { CountUp } from 'use-count-up'

const CounterArea = () => {
  const CounterData = [
    {
      img: img1,
      count: 120,
      title: "Musical artist",
    },
    {
      img: img2,
      count: 350,
      title: "Hours of music",
    },
    {
      img: img3,
      count: 50,
      title: "Seat allocated",
    },
    {
      img: img4,
      count: 70,
      title: "Music bandst",
    },
  ];
  return (
    <>
      <section id="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="counter-area-wrapper">
                {CounterData.map((data, index) => (
                  <div className="counter-details-home-two" key={index}>
                    <div className="counter-img">
                      <img src={data.img} alt="icon" />
                    </div>
                    <div className="counter-area">
                      <h2>
                        <span className="counter"><CountUp isCounting end={data.count} duration={3.2} /></span>+
                      </h2>
                    </div>
                    <p>{data.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterArea;
