import React from 'react'
// import Link
import { Link } from 'react-router-dom'

const CopyRight = () => {
  return (
    <>
        <div className="copyright-area">
        <div className="container">
            <div className="row">
                <div className="co-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="copyright-left">
                        <p>Copyright © 2024 All Rights Reserved</p>
                    </div>
                </div>
                <div className="co-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="copyright-right">
                        <ul>
                            <li>
                                <Link to="#!">Privacy policy</Link>
                            </li>
                            <li><Link to="#!">|</Link></li>
                            <li>
                                <Link to="#!">Terms & Conditions</Link>
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