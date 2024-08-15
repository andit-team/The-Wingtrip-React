import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import Login & Register
import LoginArea from '../component/Login'

const LoginPage = () => {
  return (
    <>
    <CommonBanner heading="Login & Register" pagination="Login & Register" />
    <LoginArea/>
    </>
  )
}

export default LoginPage