import React, { FC } from "react";
import SiteWrapper from "../../components/site/SiteWrapper";
import BlogIndexHeader from "../../components/features/blog/BlogIndexHeader";
import BlogIndexMain from "../../components/features/blog/BlogIndexMain";
import SEO from "../../components/site/SEO";

const BlogIndex: FC = () => {
  return (
    <SiteWrapper>
      <SEO title="Blog" />
      <BlogIndexHeader />
      <BlogIndexMain />
    </SiteWrapper>
  );
};

export default BlogIndex;
