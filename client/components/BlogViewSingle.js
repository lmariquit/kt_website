import React, {Component} from 'react'

const BlogViewSingle = props => {
  const {title, content, pic} = props
  return (
    <div id="blogContainerIndividual">
      <div id="blogHeaderContainer">
        <div id="dateContainer">
          <div id="month">Jan</div>
          <div id="day">18</div>
        </div>
        <div id="titleBlog">{title}</div>
      </div>
      <div id="blogContentContainer">
        <div id="picBlog">{pic}</div>
        <div id="contentBlog">{content}</div>
      </div>
    </div>
  )
}

export default BlogViewSingle
