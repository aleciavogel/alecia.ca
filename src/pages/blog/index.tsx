import React, { FC } from "react";
import { graphql } from "gatsby";

import SiteWrapper from "../../components/features/site/SiteWrapper";
import BlogIndexHeader from "../../components/features/blog/BlogIndexHeader";
import SEO from "../../components/features/site/SEO";
import SiteHeader from "../../components/features/site/SiteHeader";
import { IBlogListItem } from "../../definitions/blog";
import BlogListItem from "../../components/features/blog/list/BlogListItem";

interface IArticleNode {
  node: IBlogListItem;
}

interface Props {
  data: {
    allMdx: {
      edges: IArticleNode[];
    };
  };
}

const BlogIndex: FC<Props> = ({ data }) => {
  const {
    allMdx: { edges: articles },
  } = data; // data.allMdx holds your post data

  return (
    <SiteWrapper>
      <SEO title="Blog" />
      <BlogIndexHeader />
      <div className="relative overflow-hidden pb-16 pt-48 mt-[-152px] z-40 leading-loose h-full">
        <div>
          <div className="blog-list">
            {articles.map(({ node }, index) => (
              <BlogListItem article={node} index={index} key={`blog-item-${node.id}`} />
            ))}
          </div>
        </div>

        <div className="clipped-container">
          <SiteHeader hasColor={true} />
        </div>
      </div>
    </SiteWrapper>
  );
};

export default BlogIndex;

export const query = graphql`
  query BlogList {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            primary_color
            accent_color
            text_color
            category
          }
          fields {
            slug
            timeToRead {
              text
            }
          }
        }
      }
    }
  }
`;
