import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  const { title, description } = blog;

  return (
    <div className="blog-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;
