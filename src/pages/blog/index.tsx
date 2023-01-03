import React, { FC } from "react";
import SiteWrapper from "../../components/site/SiteWrapper";
import BlogIndexHeader from "../../components/features/blog/BlogIndexHeader";
import BlogIndexMain from "../../components/features/blog/BlogIndexMain";

const BlogIndex: FC = () => {
  return (
    <SiteWrapper>
      <BlogIndexHeader />
      <BlogIndexMain />
    </SiteWrapper>
  );
};

export default BlogIndex;
