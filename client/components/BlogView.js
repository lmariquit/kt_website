import React, {Component} from 'react'
import {connect} from 'react-redux'

class BlogView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const blogPosts = this.props.blogPosts
    return <div>{blogPosts.map(post => <div>{post.title}</div>)}</div>
    // return <div>OWEIJFOWEIJ</div>
  }
}

const mapStateToProps = state => ({
  blogPosts: state.blog
})

export default connect(mapStateToProps)(BlogView)

// export default BlogView
