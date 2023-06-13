import fs from "fs";
import path from "path";
import readingTime from "reading-time";
import { Metadata } from "next";
import Link from "next/link";

import MDXWrapper from "@/components/features/mdx";
import ArticleMain from "@/components/pages/blog/ArticleMain";
import ArticleHeader from "@/components/pages/blog/ArticleHeader";
import SiteWrapper from "@/components/pages/shared/layout/SiteWrapper";
import { getPostBySlug } from "@/lib/posts";

export default function Post({ params }: any) {
  const props = getPostBySlug(params?.slug);

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
          <p className="mt-8 content-block">
            <Link href="/" className="">
              <span>← Back to homepage</span>
            </Link>
          </p>
        </ArticleMain>
      </article>
    </SiteWrapper>
  );
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const props = getPostBySlug(params?.slug);
  return {
    title: `${props.frontMatter.title} | Alecia.ca`,
    authors: [
      {
        name: "Alecia Vogel",
        url: "https://alecia.ca",
      },
    ],
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("_posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}
