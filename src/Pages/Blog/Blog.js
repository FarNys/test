import React from "react";
import "../../Styles/Blog.scss";
import { BsFillCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import BlogHeader from "./BlogHeader.js";
import BlogNew from "./BlogNew";
import BlogProduct from "./BlogProduct";

const Blog = () => {
  return (
    <div className="blog_container">
      <BlogHeader />
      <BlogNew />
      <BlogProduct />
    </div>
  );
};

export default Blog;
