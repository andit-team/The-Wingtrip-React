import React from 'react'
// import Link
import { Link } from 'react-router-dom'
// import SectionHeading
import SectionHeading from '../../Common/SectionHeading'
// import Logo
import logo1 from "../../../assets/img/sponsor/sponsor-1.png"
import logo2 from "../../../assets/img/sponsor/sponsor-2.png"
import logo3 from "../../../assets/img/sponsor/sponsor-3.png"
import logo4 from "../../../assets/img/sponsor/sponsor-4.png"
import logo5 from "../../../assets/img/sponsor/sponsor-5.png"
import logo6 from "../../../assets/img/sponsor/sponsor-6.png"
import logo7 from "../../../assets/img/sponsor/sponsor-7.png"
import logo8 from "../../../assets/img/sponsor/sponsor-8.png"
import logo9 from "../../../assets/img/sponsor/sponsor-9.png"
import logo10 from "../../../assets/img/sponsor/sponsor-10.png"


const SponsorsArea = () => {
    const logoData =[
        {img:logo1},
        {img:logo2},
        {img:logo3},
        {img:logo4},
        {img:logo5},
        {img:logo6},
        {img:logo7},
        {img:logo8},
        {img:logo9},
        {img:logo10},
    ]
  return (
    <>
     <section id="sponsor-area">
        <div className="container">
            <SectionHeading title="Sponsors" heading="75+ world’s leading companies with us "/>
            <div className="sponsor-logo-wrapper">
                {logoData.map((data, index) =>(
                      <div className="sponsor-logo" key={index}>
                      <Link to="#!"><img src={data.img} alt="logo" /></Link>
                  </div>
                ))} 
            </div>
        </div>
    </section>
    </>
  )
}

export default SponsorsArea