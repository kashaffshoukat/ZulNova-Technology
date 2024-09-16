import React from 'react'
import BlogDetail from '../../components/BlogDetail'
import BlogDetail2 from '../../components/BlogDetail2'
import BlogDetail3 from '../../components/BlogDetail3'
import BlogsSlider from '../../components/BlogsSlider'
import GetInTouch from '../../components/GetInTouch/GetInTouch'


const BlogsDetailsComponent = () => {
  return (
    <div>
      <BlogDetail />
      <BlogDetail2 />
      <BlogDetail3 />
      <BlogsSlider />
      <GetInTouch />
    </div>
  )
}

export default BlogsDetailsComponent