import React from 'react'

const LoginArea = () => {
  return (
    <>
         <section id="login-section" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading text-center">
                        <h4>Login & Register</h4>
                        <h2>Access Your Account To Get Everything </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="login-section-wraper">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="login-wraper">
                                    <h3><span className="section-after">Login</span></h3>
                                    <form action="#!">
                                        <div className="login-input-area">
                                            <div className="my-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">User name or
                                                    email
                                                    <span>*</span></label>
                                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                                    placeholder="User name or email" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Password
                                                    <span>*</span></label>
                                                <input type="password" className="form-control"
                                                    id="exampleFormControlInput2" placeholder="Enter password" />
                                            </div>
                                        </div>
                                        <div className="login-bottom">
                                            <div className="login-check form-check">
                                                <input className="login-check-input checkBox form-check-input"
                                                    type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Remember me
                                                </label>
                                            </div>
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                        <div className="login-btn">
                                            <button className="btn theme-btn">Log in</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="registion-wraper">
                                    <h3><span className="section-after">Register</span></h3>
                                    <form action="#!">
                                        <div className="registion-input-area">
                                            <div className="my-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address
                                                    <span>*</span></label>
                                                <input type="email" className="form-control" id="exampleFormControlInput3"
                                                    placeholder="Enter email address" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">User name
                                                    <span>*</span></label>
                                                <input type="text" className="form-control" id="exampleFormControlInput4"
                                                    placeholder="Enter user name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Password
                                                    <span>*</span></label>
                                                <input type="password" className="form-control"
                                                    id="exampleFormControlInput5" placeholder="Enter password" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Confirm
                                                    password
                                                    <span>*</span></label>
                                                <input type="password" className="form-control"
                                                    id="exampleFormControlInput6" placeholder="Enter password" />
                                            </div>
                                        </div>
                                        <div className="login-btn">
                                            <button className="btn theme-btn">Register now</button>
                                        </div>
                                    </form>
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

export default LoginArea