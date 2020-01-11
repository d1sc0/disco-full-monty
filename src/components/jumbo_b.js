import React from 'react'
import { Link } from 'gatsby'
//import { Jumbotron } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

const JumboB = ({ jumboData, jumboImage }) => {
  return (
    <div className="container mb-4 text-white rounded">
      <BackgroundImage
        Tag="div"
        className={jumboData.ImgClass}
        fluid={jumboImage}
      >
        <h1 className="jumbotron-heading text-white display-4 font-italic">
          {jumboData.Title}
        </h1>
        <p className="lead my-3">{jumboData.Text}</p>
        <p className="lead my-3">
          <Link className="text-white font-weight-bold" to={jumboData.Action}>
            {jumboData.BtnText}
          </Link>
        </p>
      </BackgroundImage>
    </div>
  )
}

export default JumboB
