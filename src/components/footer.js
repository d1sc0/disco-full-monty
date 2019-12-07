import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Foot = ({ siteTitle, siteAuthor }) => {
  return (
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <Link to="/#top">Back to top</Link>
        </p>
        <p>
          {siteTitle} - {siteAuthor} 2019.
          <br />
          <Link to="/">Read more about {siteAuthor}</Link>
        </p>
      </div>
    </footer>
  )
}

Foot.propTypes = {
  siteAuthor: PropTypes.string,
  siteTitle: PropTypes.string,
}

Foot.defaultProps = {
  siteAuthor: ``,
  siteTitle: ``,
}

export default Foot
