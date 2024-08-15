import React from 'react'
// import SideBar
import SideBar from './SideBar'
// import img
import Img from "../../assets/img/service/service-details-img.png"
import Icon1 from "../../assets/img/icon/headphone-icon.png"
import Icon2 from "../../assets/img/icon/decrotation-icon.png"
import Icon3 from "../../assets/img/icon/home-icon.png"

const ServiceDetailsArea = () => {
    // Service Data
    const Datas =[
        {
            img:Icon1,
            name:"24/7 services",
            para:"Enim in nisi ad dolor. Exercitation excepteur deserunt roident."
        },
        {
            img:Icon2,
            name:"Premium decorations",
            para:"Enim in nisi ad dolor. Exercitation excepteur deserunt roident."
        },
        {
            img:Icon3,
            name:"Luxury auditorium",
            para:"Enim in nisi ad dolor. Exercitation excepteur deserunt roident."
        },

    ]
    // Faqs Data
    const FaqsData = [
        {   id:1,
            title:"Irure veniam commodo magna adipisicing esse adipisicing",
            para:`Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit
                 nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.`,
        coll:true
        },
        {
            id:2,
            title:" Magna Lorem ea qui et amet. Ipsum consequat commodo mollit adipisi",
             para:`Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit
                 nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.`,
             coll:false
        },
        {
            id:3,
            title:" Adipisicing non cillum duis laborum ad consectetur commodo pariatur sunt sit qui",
             para:`Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit
                 nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.`,
            coll:false
        }


    ]
  return (
    <>
    <section id="service-details" className="section-padding">
        <div className="container">
            <div className="service-details-wraper">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="service-details-left">
                            <div className="service-details-img">
                                <img src={Img} alt="img" />
                            </div>
                            <div className="service-details-head">
                                <h2>Labore deserunt ea sunt do velit duis excepteur</h2>
                                <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many
                                    variations of passages of Lorem Ipsum available but the majority aliquip enim
                                    eiusmod.</p>
                                <p className="pt-3">If you are going to use a passage of Lorem Ipsum, you need to be sure
                                    there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum
                                    generators on the Internet tend to repeat predefined chunks as necessary, making
                                    this the first true. Quis culpa est dolor sint fugiat enim sit aliquip voluptate ea.
                                </p>
                                <h3>The most significant transport service we done!</h3>
                                <p >Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are
                                    many variations of passages of Lorem Ipsum frog available, but the majority have
                                    alteratir words which don't look even slightly believable. Est id culpa laborum.
                                    Consequat ut aliquip pariatur aliquip esse anim eiusmod sit dolor aliquip</p>

                                <div className="service-list">
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum.</li>
                                        <li>There are many variations of passages of Lorem Ipsum.</li>
                                        <li>Available but the majority have alteration in some injected or words.
                                        </li>
                                        <li>There are many variations of passages of Lorem Ipsum which don't look
                                            even
                                            slightly believable.</li>
                                    </ul>
                                </div>
                                <div className="project-details-card-wraper">
                                    <div className="row">
                                        {Datas.map((data, index)=>(
                                              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                                              <div className="service-card-details">
                                                  <img src={data.img} alt="icon" />
                                                  <h5 className="section-after">{data.name}</h5>
                                                  <p>{data.para}</p>
                                              </div>
                                          </div>
                                        ))}
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many
                                    variations of passages of Lorem Ipsum available, but the majority have alteration in
                                    some injected or words which don't look even slightly believable.
                                </p>
                            </div>

                            <div className="service-details-accordion">
                                <h3>Frequently asked question</h3>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                    anything em barrang hidden in the middle of text. All the making this the first
                                    true.
                                </p>

                                <div className="accordion-area">
                                    <div className="accordion" id="accordionExample">
                                        {FaqsData.map((data, index)=>(
                                             <div className="accordion-item accordion-wrapper" key={index}>
                                             <h2 className="accordion-header" id={"headingOne" + data.id}>
                                                 <button className="accordion-button accordion-btn accordion-after" type="button" data-bs-toggle="collapse"
                                                     data-bs-target={"#collapseOne" + data.id} aria-expanded="true" aria-controls={"collapseOne" + data.id}>
                                                     {data.title}
                                                 </button>
                                             </h2>
                                             <div id={"collapseOne" + data.id} className={ data.coll === false ? "": "accordion-collapse"}
                                                 aria-labelledby={"headingOne" + data.id} data-bs-parent="#accordionExample">
                                                 <div className="accordion-body">
                                                     <p>
                                                      {data.para}
                                                     </p>
                                                 </div>
                                             </div>
                                         </div>
                                        ))} 
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SideBar/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ServiceDetailsArea