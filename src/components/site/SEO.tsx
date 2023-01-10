import React, { FC } from "react";
import { Helmet } from "react-helmet";

import useSiteMetadata from "../../hooks/useSiteMetadata";

interface Props {
  title?: string;
}
const SEO: FC<Props> = ({ title }) => {
  const metadata = useSiteMetadata();
  let seoTitle = title ?? metadata.title;

  return (
    <Helmet
      title={seoTitle}
      titleTemplate={title ? `%s | ${metadata.title}` : metadata.title}
      meta={[
        {
          name: `description`,
          content: metadata.description,
        },
        {
          property: `og:title`,
          content: metadata.title,
        },
        {
          property: `og:description`,
          content: metadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        // TODO: make a default social card for my site
        // {
        //   property: "og:image",
        //   content: socialCard,
        // },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metadata.social?.twitter,
        },
        {
          name: `twitter:title`,
          content: metadata.title,
        },
        {
          name: `twitter:description`,
          content: metadata.description,
        },
        // TODO: make a default social card for my site
        // {
        //   name: "twitter:image",
        //   content: socialCard,
        // },
      ]}
    />
  );
};

export default SEO;
