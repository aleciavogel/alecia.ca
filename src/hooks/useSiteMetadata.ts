import { useStaticQuery, graphql } from "gatsby";
import { ISite } from "../definitions/blog";

const useSocialLinks = () => {
  const data: { site: ISite } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
          author {
            name
            title
            email
            summary
          }
          social {
            twitter
            linkedIn
            github
            dribbble
          }
        }
      }
    }
  `);

  return {
    ...data.site.siteMetadata,
  };
};

export default useSocialLinks;
