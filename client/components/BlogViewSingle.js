import React from 'react'

const BlogViewSingle = props => {
  const {
    title,
    content,
    pic,
    createYear,
    createMonth,
    createDay,
    updatedYear,
    updatedMonth,
    updatedDay
  } = props
  return (
    <div id="blogContainerIndividual">
      <div id="blogHeaderContainer">
        <div id="dateContainer">
          {/* <div id="year">{createYear}</div> */}
          <div id="month">{createMonth}</div>
          <div id="day">{createDay}</div>
        </div>
        <div id="titleBlog">{title}</div>
      </div>
      <div id="blogContentContainer">
        <div id="picBlog">
          <img src={pic} />
        </div>
        <div id="contentBlogContainer">
          <div id="contentBlog">{content}</div>
        </div>
      </div>
      <div id="clickToReadMore">CLICK TO READ MORE</div>
    </div>
  )
}

export default BlogViewSingle
