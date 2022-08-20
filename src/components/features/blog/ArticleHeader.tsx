import React, { FC } from "react";
import ReadMoreArrowIcon from "../../icons/ReadMoreArrowIcon";
import { BlogPostFrontmatter } from "../../../definitions/blog";

interface Props {
  data: BlogPostFrontmatter;
}

const ArticleHeader: FC<Props> = ({ data }) => {
  const { title, category, description } = data;

  return (
    <header className={`hero`}>
      <div className={`hero-wrapper`}>
        <span className={`article-category`}>{category}</span>
        <h1>{title}</h1>
        <p className="text-white-rgba">{description}</p>
      </div>

      <ReadMoreArrowIcon />
    </header>
  );
};

export default ArticleHeader;
