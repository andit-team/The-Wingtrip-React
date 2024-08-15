import React from 'react'
// import Common banner
import CommonBanner from '../component/Common/CommonBanner'
// import Eror
import ErrorArea from '../component/Error'

const ErrorPage = () => {
  return (
    <>
    <CommonBanner heading="Error page" pagination="Error page"/>
    <ErrorArea/>
    </>
  )
}

export default ErrorPage