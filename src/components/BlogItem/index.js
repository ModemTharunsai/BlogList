// Write your JS code here
import React from 'react'

const BlogItem = ({blog}) => (
  <div className="blog-item">
    <h2 className="blog-title">{blog.title}</h2>
    <p className="blog-description">{blog.description}</p>
    <div className="blog-meta">
      <span className="published-date">{blog.publishedDate}</span>
    </div>
  </div>
)

export default BlogItem
