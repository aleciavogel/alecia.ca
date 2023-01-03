import React, { FC } from "react";

const AboutHeader: FC = () => (
  <header className={`blog-index-header`}>
    <div className={`blog-index-header-wrapper`}>
      <h1>Blog</h1>
      <p className="text-white font-light">
        Stories, tutorials, and project updates straight from my dev environment.
      </p>
    </div>
  </header>
);

export default AboutHeader;
