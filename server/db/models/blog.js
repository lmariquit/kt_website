const Sequelize = require('sequelize')
const db = require('../db')

const Blog = db.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    set(title) {
      this.setDataValue('title', title.toString().toUpperCase())
    }
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Katie Mariquit'
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  media: {
    type: Sequelize.STRING
  },
  pic: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
  // datePosted: {
  //   type: Sequelize.DATE,
  //   defaultValue: Date.now()
  // },
  // dateEdited: {
  //   type: Sequelize.DATE
  // }
})

module.exports = Blog
