import React, { FC, useRef } from "react";

import SiteHeader from "../../site/SiteHeader";

const BlogIndexMain: FC = () => {
  const aboutBodyRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative overflow-hidden pb-16 pt-48 mt-[-152px] z-40 leading-loose h-full">
      <div ref={aboutBodyRef}>
        <div className="about-content">
          <p>A list will go here</p>
        </div>
      </div>

      <div className="clipped-container">
        <SiteHeader hasColor={true} />
      </div>
    </div>
  );
};

export default BlogIndexMain;
