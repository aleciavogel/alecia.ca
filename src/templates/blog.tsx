import React, { useEffect } from "react";
import { graphql } from "gatsby";
import MDXWrapper from "../components/features/mdx";
import SiteWrapper from "../components/features/site/SiteWrapper";
import ArticleHeader from "../components/features/blog/ArticleHeader";
import ArticleMain from "../components/features/blog/ArticleMain";
import ArticleSEO from "../components/features/blog/ArticleSEO";

export default function PageTemplate({ data, children, location }: any) {
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, fields } = mdx;
  const { primary_color, accent_color, text_color } = frontmatter;
  const colors = { primary_color, accent_color, text_color };

  useEffect(() => {}, []);

  return (
    <SiteWrapper {...colors}>
      <ArticleSEO frontmatter={frontmatter} banner={fields.banner} />
      <article>
        <ArticleHeader data={frontmatter} />
        <ArticleMain location={location} data={frontmatter} timeToRead={fields.timeToRead.text}>
          <div className="page-content">
            <MDXWrapper>{children}</MDXWrapper>
          </div>
        </ArticleMain>
      </article>
    </SiteWrapper>
  );
}

//language=GraphQL
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
        banner
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
        authorTwitter
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
