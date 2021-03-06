import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="nav">
    <nav id="navContainer">
      <Link to="/home" className="navLink">
        About
      </Link>
      <Link to="/blog" className="navLink">
        Blog
      </Link>
      <Link to="/home" className="navLink">
        Portfolio
      </Link>
      <Link to="/home" className="navLink">
        Music
      </Link>
      <Link to="/home" className="navLink">
        Contact
      </Link>
    </nav>
    <hr />
    <div id="gradient" />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
