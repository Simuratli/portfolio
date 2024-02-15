import React from "react";
import { Header } from "../../components";
import { HeaderType } from "../../types/global.types";
import NewImage from "../../assets/images/newIcon.svg";
import { BlogPropTypes } from "./Blog.types";
const Blog = ({ title }: BlogPropTypes) => {
  return (
    <div className="blog">
      <div className="blog__header">
        <Header type={HeaderType.MEDIUM}>{title}</Header>

        <img src={NewImage} alt="Newicon" />
      </div>

      <div className="blog__content">
        <div className="blogCard rl">
          <div className="blogCard__image">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*l-RoG5PeMSqshdksCqUUaA.png"
              alt="Medium blog Simuratli eljan"
            />
          </div>
          <div className="blogCard__title">
            Unlocking the Power of TypeScript: A Guide to Essential Utility
            Types
          </div>
        </div>

        <div className="blogCard rr">
          <div className="blogCard__image">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*l-RoG5PeMSqshdksCqUUaA.png"
              alt="Medium blog Simuratli eljan"
            />
          </div>
          <div className="blogCard__title">
            Unlocking the Power of TypeScript: A Guide to Essential Utility
            Types
          </div>
        </div>
        <div className="blogCard rl">
          <div className="blogCard__image">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*l-RoG5PeMSqshdksCqUUaA.png"
              alt="Medium blog Simuratli eljan"
            />
          </div>
          <div className="blogCard__title">
            Unlocking the Power of TypeScript: A Guide to Essential Utility
            Types
          </div>
        </div>

        <div className="blogCard rr">
          <div className="blogCard__image">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*l-RoG5PeMSqshdksCqUUaA.png"
              alt="Medium blog Simuratli eljan"
            />
          </div>
          <div className="blogCard__title">
            Unlocking the Power of TypeScript: A Guide to Essential Utility
            Types
          </div>
        </div>

        <div className="blogCard rl">
          <div className="blogCard__image">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*l-RoG5PeMSqshdksCqUUaA.png"
              alt="Medium blog Simuratli eljan"
            />
          </div>
          <div className="blogCard__title">
            Unlocking the Power of TypeScript: A Guide to Essential Utility
            Types
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
