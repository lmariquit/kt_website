import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Title = ({handleClick, isLoggedIn}) => (
  <div id="titleContainer">
    <div id="loginLogoutContainer">
      {isLoggedIn ? (
        <div id="loginLogout">
          {/* The navbar will show these links after you log in */}
          <a href="#" onClick={handleClick} className="navLink">
            Logout
          </a>
        </div>
      ) : (
        <div id="loginLogout">
          {/* The navbar will show these links before you log in */}
          <Link to="/login" className="navLink">
            Login
          </Link>
          {/* <Link to="/signup">Sign Up</Link> */}
        </div>
      )}
    </div>
    <div id="headerContainer">
      <div id="title">
        K<a className="titleSmall">ATIE</a> M<a className="titleSmall">
          ARIQUIT
        </a>
      </div>
    </div>
  </div>
)

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

export default connect(mapState, mapDispatch)(Title)

/**
 * PROP TYPES
 */
Title.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
