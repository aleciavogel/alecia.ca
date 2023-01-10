import React, { FC } from "react";
import { Helmet } from "react-helmet";

import useSiteMetadata from "../../../hooks/useSiteMetadata";
import { BlogPostFrontmatter } from "../../../definitions/blog";

interface Props {
  frontmatter: BlogPostFrontmatter;
  banner: string;
}

const ArticleSEO: FC<Props> = ({
  frontmatter: { title, description, authorTwitter },
  banner: socialCard,
}) => {
  const metadata = useSiteMetadata();

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${metadata.title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `article`,
        },
        {
          property: "og:image",
          content: socialCard,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: authorTwitter ?? metadata.social?.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: "twitter:image",
          content: socialCard,
        },
      ]}
    />
  );
};

export default ArticleSEO;
