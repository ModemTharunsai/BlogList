import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogsList }) => (
  <div className="blog-list-container">
    {blogsList.map(blog => (
      <BlogItem key={blog.id} blog={blog} />
    ))}
  </div>
);

export default BlogList;
