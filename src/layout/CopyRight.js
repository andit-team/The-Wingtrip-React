import React from 'react'

const CopyRight = () => {
  return (
    <>
        <div className="copyright-area">
        <div className="container">
            <div className="row">
                <div className="co-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="copyright-left">
                        <p>Copyright © 2023 All Rights Reserved</p>
                    </div>
                </div>
                <div className="co-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="copyright-right">
                        <ul>
                            <li>
                                <a href="privacy-policy.html">Privacy policy</a>
                            </li>
                            <li><a href="#!">|</a></li>
                            <li>
                                <a href="terms-conditions.html">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CopyRight