import React from 'react'

const CheckOutArea = () => {
  return (
    <>
           <section id="checkout_area" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="checkout_area_bg">
                        <div className="check-heading">
                            <h3>Billings Information</h3>
                        </div>
                        <div className="check-out-form">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <label htmlFor="fname">First name</label>
                                            <input type="text" required="" className="form-control" id="fname"
                                                placeholder="First name *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <label htmlFor="lname">Last name</label>
                                            <input type="text" required="" className="form-control" id="lname"
                                                placeholder="Last name *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <label htmlFor="cname">Company Name</label>
                                            <input className="form-control" required="" type="text" id="cname"
                                                placeholder="Company Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <label htmlFor="email">Email Addresse</label>
                                            <input className="form-control" required="" type="text" id="email"
                                                placeholder="info@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <label htmlFor="country">Country</label>
                                            <select className="form-control first_null" id="country">
                                                <option value="">Select an option...</option>
                                                <option value="AX">usa</option>
                                                <option value="AF">Afghanistan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <label htmlFor="city">State/City</label>
                                            <select className="form-control first_null" id="city">
                                                <option value="">Select an option...</option>
                                                <option value="AX">Aland Islands</option>
                                                <option value="AF">Afghanistan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <label htmlFor="zip">State/City</label>
                                            <input type="text" className="form-control" id="zip"
                                                placeholder="Enter Your zipcode" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <label htmlFor="faddress">Full Address</label>
                                            <input type="text" className="form-control" id="faddress"
                                                placeholder="Enter your address here.." />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="form-group mb-4">
                                            <label htmlFor="messages">Additional Notes</label>
                                            <textarea rows="5" className="form-control" id="messages"
                                                placeholder="Order notes"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="checkout-btn form-check ">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label" htmlFor="materialUnchecked">Save In Address
                                                Book</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="calculate_area checkout_calculate_area">
                        <div className="calculate_inner">
                            <div className="cart_subtotal">
                                <p>Coffee Mug</p>
                                <p className="cart_amount">$210.00</p>
                            </div>
                            <div className="cart_subtotal ">
                                <p>Stylist T - Shirt</p>
                                <p className="cart_amount"><span>Flat Rate:</span> $255.00</p>
                            </div>

                            <div className="checkout_total">
                                <div className="cart_subtotal">
                                    <p></p>
                                    <p className="cart_amount"><span>Total amount :</span> $465.00</p>
                                </div>
                                <div className="cart_subtotal">
                                    <p></p>
                                    <p className="cart_amount"> <span>Voucher (happy65) :</span> - $65.00</p>
                                </div>
                            </div>
                            <div className="checkout_total">
                                <div className="cart_subtotal">
                                    <p></p>
                                    <p className="cart_amount"><span>Grand total :</span> $400.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-details-accordion">
                         <div className="accordion-area checkout_accordion">
                            <h3>Payment</h3>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Credir Card / Debit Card
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <form className="payment-info">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                        <div className="field-input mb-3">
                                                            <input type="text" className="form-control" name="name"
                                                                placeholder="Name on the Card" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                        <div className="field-input mb-3">
                                                            <input type="text" className="form-control" name="number"
                                                                placeholder="Card Number" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-sm-12 column">
                                                        <div className="field-input mb-3">
                                                            <input type="text" className="form-control" name="date"
                                                                placeholder="Expiry Date" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 col-sm-12 column">
                                                        <div className="field-input mb-3">
                                                            <input type="text" className="form-control" name="code"
                                                                placeholder="Security Code" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-sm-12 column">
                                                        <div className="field-input message-btn">
                                                            <button type="submit" className="theme-btn btn-style-one"
                                                                data-loading-text="Please wait..."><span
                                                                    className="btn-title">Make Payment</span></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Check Payment
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Cupidatat dolor irure aliqua mollit magna quis nisi
                                                exercitation. Deserunt ex quis dolor quis aliqua mollit magna.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            Direct Bank Transfer
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Cupidatat dolor irure aliqua mollit magna quis nisi
                                                exercitation. Deserunt ex quis dolor quis aliqua mollit magna.
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
    </section>
    </>
  )
}

export default CheckOutArea