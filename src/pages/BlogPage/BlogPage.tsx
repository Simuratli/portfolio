import React from "react";
import { Blog } from "../../containers";
import Transition from "../../animations/Transition";

const BlogPage = () => {
  return (
    <Transition>
      <section className="hire">
        <Blog title="Posts" />
      </section>
    </Transition>
  );
};

export default BlogPage;
