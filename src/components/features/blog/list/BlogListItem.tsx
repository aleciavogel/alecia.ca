import React, { FC } from "react";

import { IBlogListItem } from "../../../../definitions/blog";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-solid-svg-icons";

interface Props {
  article: IBlogListItem;
  index: number;
}

const BlogListItem: FC<Props> = ({ article, index }) => {
  const {
    frontmatter: { title, description, category },
    fields: { slug, timeToRead },
  } = article;
  return (
    <article className="blog-item">
      {/*<div className="blog-item__thumbnail">*/}
      {/*  <div>A thumbnail will go here</div>*/}
      {/*</div>*/}
      <div className="blog-item__meta">
        <Link className="blog-item__category" to="#">
          {category}
        </Link>
        <div className="blog-item__reading-estimate">
          <span>{timeToRead.text}</span>
        </div>
      </div>

      <Link to={`/blog${slug}`}>
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>

      <Link className="blog-item__read-more" to={`/blog${slug}`}>
        <span>Read Post</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </article>
  );
};

export default BlogListItem;
