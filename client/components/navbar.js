import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="nav">
    <div id="loginLogoutContainer">
      {isLoggedIn ? (
        <div id="loginLogout">
          {/* The navbar will show these links after you log in */}
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div id="loginLogout">
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          {/* <Link to="/signup">Sign Up</Link> */}
        </div>
      )}
    </div>
    <div id="headerContainer">
      <div id="title">KT_WEBSITE</div>
    </div>
    <nav id="navContainer">
      <Link to="/home">About</Link>
      <Link to="/home">Blog</Link>
      <Link to="/home">Portfolio</Link>
      <Link to="/home">Music</Link>
      <Link to="/home">Contact</Link>
    </nav>
    <hr />
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
