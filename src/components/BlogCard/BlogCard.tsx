import React from "react";
import { Link } from "react-router-dom";
import { BlogCardPropTypes } from "./BlogCard.types";

function BlogCard({ url, title, img }: BlogCardPropTypes) {
  return (
    <Link to={url} target="__blank">
      <div className="blogCard rl">
        <div className="blogCard__image">
          <img src={img} alt={title} />
        </div>
        <div className="blogCard__title">{title}</div>
      </div>
    </Link>
  );
}

export default BlogCard;
