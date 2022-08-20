import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import SiteWrapper from "../components/site/SiteWrapper";
import ArticleHeader from "../components/features/blog/ArticleHeader";
import ArticleMain from "../components/features/blog/ArticleMain";
import components from "../components/mdx";

const shortcodes = { Link, ...components }; // Provide common components here

export default function PageTemplate({ data, children, location }: any) {
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, fields } = mdx;
  const { primary_color, accent_color, text_color } = frontmatter;
  const colors = { primary_color, accent_color, text_color };

  return (
    <SiteWrapper {...colors}>
      <article>
        <ArticleHeader data={frontmatter} />
        <ArticleMain location={location} data={frontmatter} timeToRead={fields.timeToRead.text}>
          <div className="page-content">
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </div>
        </ArticleMain>
      </article>
    </SiteWrapper>
  );
}

export const query = graphql`
  query ($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        timeToRead {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        primary_color
        accent_color
        text_color
        category
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
