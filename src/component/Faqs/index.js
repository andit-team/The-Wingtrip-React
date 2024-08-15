import React from 'react'
// import Section  Heading
import SectionHeading from '../Common/SectionHeading'

const FaqsArea = () => {
  return (
    <>
           <section id="faq-area" className="section-padding">
        <div className="container">
            <SectionHeading title="Faq" heading="Frequently Asked Question" />
            <div className="row">
                <div className="col-12">
                    <div className="faq-search-box">
                        <h6>Search your questions</h6>
                        <form action="#!">
                            <div className="input-group faq-input-group">
                                <input type="text" className="form-control bg-white" placeholder="Your question here..."
                                    aria-label="Recipient's username" />
                                <button className="btn theme-btn faq-btn">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="accordion-area-left">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item accordion-wrapper">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button accordion-btn accordion-after" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                        Est voluptate nisi veniam labore fugiat exercitation?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit
                                            nisi, pretium ut lacinia in, elementum id enim.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item accordion-wrapper">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed accordion-btn accordion-after"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                        Cupidatat qui aliquip aliqua aute exercitation laboiam sunt dolore laborum?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit
                                            nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id
                                            orci porta dapibus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item accordion-wrapper">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed accordion-btn accordion-after"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                        aria-expanded="false" aria-controls="collapseThree">
                                        Ut fugiat pariatur duis ex proident laboris nisi nisi est culpa nisi mollit?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit
                                            nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id
                                            orci porta dapibus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div className="accordion-right">
                        <div className="accordion" id="accordionExample-2">
                            <div className="accordion-item accordion-wrapper">
                                <h2 className="accordion-header accordion-top" id="heading-1">
                                    <button className="accordion-button accordion-btn collapsed accordion-after"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1"
                                        aria-expanded="false" aria-controls="collapse-1">
                                        Ea occaecat commodo sunt ad excepteur tempor voluptate voluptate?
                                    </button>
                                </h2>
                                <div id="collapse-1" className="accordion-collapse collapse" aria-labelledby="heading-1"
                                    data-bs-parent="#accordionExample-2">
                                    <div className="accordion-body">
                                        <p>Mollit reprehenderit sit elit duis sit consequat. Deserunt irure consectetur
                                            est
                                            ipsum amet in. Ex ex esse proident elit tempor ullamco qui nulla
                                            exercitation et
                                            cillum laborum sunt ad excepteur tempor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item accordion-wrapper">
                                <h2 className="accordion-header accordion-top" id="heading-2">
                                    <button className="accordion-button accordion-btn collapsed accordion-after"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2"
                                        aria-expanded="false" aria-controls="collapse-2">
                                        Ullamco velit do. Cillum proident ut sint et laborum do orem?
                                    </button>
                                </h2>
                                <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2"
                                    data-bs-parent="#accordionExample-2">
                                    <div className="accordion-body">
                                        <p>Mollit reprehenderit sit elit duis sit consequat. Deserunt irure consectetur
                                            est
                                            ipsum amet in. Ex ex esse proident elit tempor ullamco qui nulla
                                            exercitation et
                                            cillum laborum sunt ad excepteur tempor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item accordion-wrapper">
                                <h2 className="accordion-header accordion-top" id="headingthree">
                                    <button className="accordion-button accordion-btn collapsed accordion-after"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree"
                                        aria-expanded="false" aria-controls="collapsethree">
                                        Eiusmod amet dolor aliqua eu ad id korem elit voluptate id pariatur
                                        exercitation?
                                    </button>
                                </h2>
                                <div id="collapsethree" className="accordion-collapse collapse"
                                    aria-labelledby="headingthree" data-bs-parent="#accordionExample-2">
                                    <div className="accordion-body">
                                        <p>Mollit reprehenderit sit elit duis sit consequat. Deserunt irure consectetur
                                            est
                                            ipsum amet in. Ex ex esse proident elit tempor ullamco qui nulla
                                            exercitation et
                                            cillum laborum sunt ad excepteur tempor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item accordion-wrapper">
                                <h2 className="accordion-header accordion-top" id="headingfour">
                                    <button className="accordion-button accordion-btn collapsed accordion-after"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour"
                                        aria-expanded="false" aria-controls="collapsefour">
                                        It is a long established fact that a reader will be distracted by the
                                        readable content?
                                    </button>
                                </h2>
                                <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour"
                                    data-bs-parent="#accordionExample-2">
                                    <div className="accordion-body">
                                        <p> Mollit reprehenderit sit elit duis sit consequat. Deserunt irure consectetur
                                            est
                                            ipsum amet in. Ex ex esse proident elit tempor ullamco qui nulla
                                            exercitation et
                                            cillum laborum sunt ad excepteur tempor.</p>
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
  )
}

export default FaqsArea