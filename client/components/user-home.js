import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props //currently not in use

  return (
    <div id="bioContainer">
      {/* <h3>Welcome, {email}</h3> */}
      <img id="aboutImg" src="kt_image.jpeg" />
      <div id="bio">
        <p>
          Upon graduating from Rutgers University, I worked at Jefferies'
          Operations department. During my time there, I taught myself to
          program in Visual Basic for Applications in order to automate many of
          my team's daily functions.
        </p>
        <p>
          Over the years of continually creating programs and tools, I decided
          that I wanted my career to focus on creating tools to find creative
          solutions to problems. I was accepted into Fullstack Academy and have
          gone through months of rigorous training in Javascript and other
          various technologies pertinent to entering the tech industry: Node.js,
          React, Git, GitHub, Express.js, Sequelize, and much more.
        </p>
        <p>
          What drives me to programming is the endless possibilities. Software
          Engineers around the world create new and amazing things every single
          day, and I am looking to use my own creativity and problem
          solving-abilities to create programs and tools to help improve our
          lives.
        </p>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
