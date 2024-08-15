import React from 'react'
// import img
import img1 from "../../assets/img/portfolio/portfolio-details-img.png"
import img2 from "../../assets/img/portfolio/portfolio-left.png"
import img3 from "../../assets/img/portfolio/portfolio-right.png"

const PortfolioDetails = () => {
  return (
    <>
        <section id="portfolio-details-area" className="section-padding">
        <div className="container">
            <div className="portfolio-details-top">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="portfolio-details-top-left">
                            <h2>Fugiat incididunt irure ad fugiat qui duis est</h2>
                            <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many
                                variations of desi passages of Lorem Ipsum available but the majority aliquip enim
                                eiusmod. There are many variations of passages of frog available but the.</p>
                            <p>Irure sunt ex ea mollit ullamco excepteur ut sint cillum tempor. Exercitation non Lorem
                                eu eiusmod sunt in exercitation. Quis tempor proident quis proident. Sint ea dolore
                                labore eiusmod nisi excepteur irure. Voluptate sint sint qui et laborum. Consequat
                                aliquip voluptate esse voluptate aliqua elit fugiat mollit.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-details-top-right">
                            <div className="claint-area">
                                <div className="claint-info">
                                    <h5>Client name:</h5>
                                    <p>Joseph stalin</p>
                                </div>
                                <div className="claint-info">
                                    <h5>Wedding session:</h5>
                                    <p>Morning</p>
                                </div>
                                <div className="claint-info">
                                    <h5>Start date:</h5>
                                    <p>10 Mar 2023</p>
                                </div>
                            </div>
                            <div className="trainer-area">
                                <div className="trainer-info">
                                    <h5>Trainer name:</h5>
                                    <p>David mercuinis</p>
                                </div>
                                <div className="trainer-info">
                                    <h5>Program duration:</h5>
                                    <p>1 week</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="portfolio-details-img">
                            <img src={img1} alt="img" />
                        </div>
                    </div>
                    <div className="portfolio-details">
                        <p>Pariatur magna incididunt nisi cillum in. Dolore do cupidatat ex Lorem. Elit dolor amet
                            exercitation
                            minim adipisicing cillum veniam do sit. Donec vitae commodo enim, eu aliquet nisi. Aenean
                            lobortis
                            volutpat magna in lobortis. Ut mauris nisi, pharetra vel vehicula eget, lobortis id purus.
                            Donec
                            malesuada interdum purus in tincidunt. Vestibulum sed laoreet arcu. Cras vel felis in est
                            commodo
                            mattis. Etiam venenatis consequat rutrum. Curabitur pulvinar lorem ornare, laoreet urna a,
                            eleifend
                            orci. Sed vitae finibus elit. Ut sed hendrerit enim.</p>
                        <div className="portfolio-list-area">
                            <ul className="portfolio-list">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Phasellus pretium mi ac purus blandit, quis fermentum felis tempus.</li>
                                <li>Nulla porta risus nec tortor semper, et fringilla est ullamcorper.</li>
                                <li>Aenean ac dui at metus porttitor ullamcorper a aliquam enim.</li>
                                <li>Praesent porta dui et lorem volutpat bibendum.</li>
                                <li>Suspendisse fringilla nisi sed lacinia porttitor.</li>
                            </ul>
                            <ul className="portfolio-list">
                                <li>Phasellus pretium mi ac purus blandit, quis fermentum felis tempus.</li>
                                <li>Nulla porta risus nec tortor semper, et fringilla est ullamcorper.</li>
                                <li>Aenean ac dui at metus porttitor ullamcorper a aliquam enim.</li>
                                <li>Praesent porta dui et lorem volutpat bibendum.</li>
                                <li>Suspendisse fringilla nisi sed lacinia porttitor.</li>
                            </ul>
                        </div>
                        <p>Labore quis sunt veniam dolor eiusmod culpa occaecat cupidatat in mollit est. Fugiat eu
                            veniam
                            consequat et fugiat. Aute nostrud non occaecat dolore mollit enim deserunt duis culpa
                            commodo
                            laboris fugiat. Anim sint sint eiusmod adipisicing ex irure minim. Magna est non Lorem ad
                            consequat
                            et qui incididunt enim.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="portfolio-gallery-img">
                                    <img src={img2} alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="portfolio-gallery-img">
                                    <img src={img3} alt="img" />
                                </div>
                            </div>
                        </div>
                        <p>Fugiat eu veniam consequat et fugiat. Aute nostrud non occaecat dolore mollit enim deserunt
                            duis
                            culpa commodo laboris fugiat. Anim sint sint eiusmod adipisicing ex irure minim. Magna est
                            non Lorem
                            ad consequat et qui incididunt enim. Sit est sit ullamco sit ad magna anim sit. Do velit et
                            irure
                            dolor deserunt id labore enim fugiat et consequat magna incididunt nisi. Elit reprehenderit
                            qui anim
                            commodo nostrud laborum mollit aliqua irure cillum ea proident quis consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PortfolioDetails