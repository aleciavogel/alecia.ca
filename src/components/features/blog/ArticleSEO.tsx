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
  const metaDescription = description || metadata.description;
  const defaultTitle = metadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : "%s"}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
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
          content: metaDescription,
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
