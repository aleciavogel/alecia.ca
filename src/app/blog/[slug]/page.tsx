import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import MDXWrapper from "@/components/mdx";
import ArticleMain from "@/components/blog/ArticleMain";
import ArticleHeader from "@/components/blog/ArticleHeader";
import SiteWrapper from "@/components/site/SiteWrapper";

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <SiteWrapper
      text_color={props.frontMatter.text_color}
      primary_color={props.frontMatter.primary_color}
      accent_color={props.frontMatter.accent_color}
    >
      <article>
        <ArticleHeader data={props.frontMatter} />
        <ArticleMain timeToRead={readingTime(props.content).text} data={props.frontMatter}>
          <MDXWrapper source={props.content} />
        </ArticleMain>
      </article>
    </SiteWrapper>
  );
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}
