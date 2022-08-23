import React, { FC, useRef } from "react";

import PostInfo from "./PostInfo";
import SiteHeader from "../../site/SiteHeader";
import ReadingProgress from "./ReadingProgress";
import { BlogPostFrontmatter } from "../../../definitions/blog";

interface Props {
  timeToRead: string;
  location: Location;
  data: BlogPostFrontmatter;
  children?: string | React.ReactNode;
}

const ArticleMain: FC<Props> = ({ data, children, timeToRead, location }) => {
  const articleBodyRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative overflow-hidden pb-16 pt-48 mt-[-152px] z-40 leading-loose h-full">
      <ReadingProgress target={articleBodyRef} />
      <PostInfo data={data} timeToRead={timeToRead} location={location} />
      <div ref={articleBodyRef}>{children}</div>

      <div className="clipped-container">
        <SiteHeader hasColor={true} />
      </div>
    </div>
  );
};

export default ArticleMain;
