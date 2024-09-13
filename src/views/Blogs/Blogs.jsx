import React, { useState, useEffect } from 'react';
import Blogstopsection from '../../components/Blogstopsection';
import AllBlogs from '../../components/AllBlogs';
import { GetAllBlog } from '../../utils/_BLOG';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await GetAllBlog();
        setBlogs(response.data.payload);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Blogstopsection />
      <div className='p-8'>
        <AllBlogs blogs={blogs} />
      </div>
    </>
  );
};

export default Blogs;
