import React, {Component} from 'react'
import {connect} from 'react-redux'
import BlogViewSingle from './BlogViewSingle'

class BlogView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const blogPosts = this.props.blogPosts
    console.log(blogPosts)
    let month = blogPosts.createdAt
    let day = blogPosts.createdAt
    console.log('month', month, 'day', day)
    return (
      <div>
        {blogPosts.map(post => {
          return (
            <BlogViewSingle
              key={post.id}
              title={post.title}
              content={post.content}
              pic={post.pic}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  blogPosts: state.blog
})

export default connect(mapStateToProps)(BlogView)

// export default BlogView
