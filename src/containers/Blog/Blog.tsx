import React, { useEffect, useState } from "react";
import { Header, BlogCard } from "../../components";
import { HeaderType } from "../../types/global.types";
import NewImage from "../../assets/images/newIcon.svg";
import { BlogPropTypes } from "./Blog.types";
import { getPosts } from "../../client/client";
import { urlFor } from "../../client/client";
import { useNavigate } from "react-router-dom";
import { PostType } from "client/api.types";
const Blog = ({ title, small }: BlogPropTypes) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    getPosts().then((response: PostType[]) => {
      setPosts(response);
    });
  }, []);

  return (
    <div className="blog">
      <div className="blog__header">
        <Header type={HeaderType.MEDIUM}>{title}</Header>

        <img src={NewImage} alt="Newicon" />
      </div>

      <div className="blog__content">
        {posts.map((post, index) => {
          return (
            index < (small ? 4 : posts.length) && (
              <BlogCard
                key={post._id}
                img={urlFor(post.mainImage).url()}
                title={post.title}
                url={post.url}
              />
            )
          );
        })}
      </div>

      {small && (
        <div className="portfolioSection__viewMore">
          <button
            onClick={() => {
              navigate("/blog");
            }}
          >
            View more
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
