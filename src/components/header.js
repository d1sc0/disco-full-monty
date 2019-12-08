import React from 'react'
import PropTypes from 'prop-types'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'gatsby'
import { FaInstagram, FaTwitter } from 'react-icons/fa'

const HeadNav = ({ siteTitle }) => {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="white" variant="light">
        <div className="container">
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              <h1 className="siteTitle">{siteTitle}</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link activeClassName="active" className="nav-link" to="/">
                Home
              </Link>
              <Link
                activeClassName="active"
                partiallyActive={true}
                className="nav-link"
                to="/blog/"
              >
                Blog
              </Link>
              <Link activeClassName="active" className="nav-link" to="/about/">
                About
              </Link>
              <a href="https://google.com" className="nav-link">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="nav-link">
                <FaInstagram />
              </a>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

HeadNav.propTypes = {
  siteTitle: PropTypes.string,
}

HeadNav.defaultProps = {
  siteTitle: ``,
}

export default HeadNav
