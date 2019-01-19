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

    return (
      <div id="entireBlogView">
        <div>RECENT POSTS</div>
        {blogPosts.map(post => {
          // create Date
          let cYear = post.createdAt.toString().slice(0, 4)
          let cMonth = post.createdAt.toString().slice(5, 7)
          let cDay = post.createdAt.toString().slice(8, 10) - 1
          let createDate = new Date(cYear, cMonth, cDay)

          // updated Date
          let uYear = post.createdAt.toString().slice(0, 4)
          let uMonth = post.createdAt.toString().slice(5, 7)
          let uDay = post.createdAt.toString().slice(8, 10) - 1
          let updatedDate = new Date(uYear, uMonth, uDay)

          return (
            <BlogViewSingle
              key={post.id}
              title={post.title}
              content={post.content}
              pic={post.pic}
              createYear={createDate.getFullYear()}
              createMonth={createDate
                .toLocaleString('en-us', {
                  month: 'short'
                })
                .toUpperCase()}
              createDay={createDate.getDate()}
              updatedYear={updatedDate.getFullYear()}
              updatedMonth={updatedDate
                .toLocaleString('en-us', {
                  month: 'short'
                })
                .toUpperCase()}
              updatedDay={updatedDate.getDate()}
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
