import React from "react";

const ContactFrom = () => {
  return (
    <>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="contact-info-wraper">
          <h3>Don’t Hesitate To Contact Us For Any Query!</h3>
          <p>Aliqua pariatur nisi sit dolore do quis quis ipsum incididunt.</p>

          <div className="contact-input-area">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <form action="#!">
                  <div className="contact-input">
                    <div className="contact-area">
                      <label
                        htmlFor="exampleFormControlInput3"
                        className="form-label"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput3"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="contact-area">
                      <label
                        htmlFor="exampleFormControlInput4"
                        className="form-label"
                      >
                        Phone number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput4"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <form action="#!">
                  <div className="contact-input">
                    <div className="contact-area">
                      <label
                        htmlFor="exampleFormControlInput3"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput5"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="contact-area">
                      <label
                        htmlFor="exampleFormControlInput4"
                        className="form-label"
                      >
                        Subject
                      </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option>Choose subject</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="contact-message">
                <label htmlFor="exampleFormControlInput5" className="form-label">
                  Your message
                </label>
                <textarea
                  className="form-control"
                  name="x"
                  id="5"
                  rows="5"
                  placeholder="write a message here ..."
                ></textarea>
              </div>
              <div className="contact-btn">
                <button className="btn theme-btn">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFrom;
