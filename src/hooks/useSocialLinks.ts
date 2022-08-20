import { useStaticQuery, graphql } from "gatsby";
import { ISite } from "../definitions/blog";

const useSocialLinks = () => {
  const data: { site: ISite } = useStaticQuery(graphql`
    query SocialLinksQuery {
      site {
        siteMetadata {
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
    ...data.site.siteMetadata?.social,
  };
};

export default useSocialLinks;
