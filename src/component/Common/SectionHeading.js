import React from 'react'

const SectionHeading = (props) => {
  return (
    <>
          <div className="row text-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h4>{props.title}</h4>
                        <h2>{props.heading}</h2>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SectionHeading