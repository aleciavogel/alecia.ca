import React, { FC } from "react";

import { IBlogListItem } from "../../../../definitions/blog";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRight } from "@fortawesome/pro-solid-svg-icons";

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
      <div className="blog-item__thumbnail">
        <div>A thumbnail will go here</div>
      </div>
      <div className="blog-item__meta">
        <div className="blog-item__category">{category}</div>
        <div className="blog-item__reading-estimate">
          <span>{timeToRead.text}</span>
        </div>
      </div>

      <h2>{title}</h2>
      <p>{description}</p>

      <Link className="blog-item__read-more" to={`/blog${slug}`}>
        <span>Read Post</span>
        <FontAwesomeIcon icon={faArrowUpRight} />
      </Link>
    </article>
  );
};

export default BlogListItem;
