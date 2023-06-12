import Link from "next/link";

import Date from "@/components/Date";
import SiteHeader from "@/components/site/SiteHeader";
import { getSortedPostsData } from "@/lib/posts";

export default function AboutMain({ params }: any) {
  const posts = getSortedPostsData();
  const allPostsData = posts.slice(0, 3);
  return (
    <div className="relative overflow-hidden pb-16 pt-48 mt-[-152px] z-40 leading-loose h-full">
      <div className="about-content">
        <div className="about-intro">
          <h2 className="font-serif">Latest Posts</h2>

          <ul className="blog-list">
            {allPostsData?.map(({ slug, frontMatter: { date, title } }: any) => (
              <li key={slug}>
                <Link href={`/blog/${slug}`}>{title}</Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="clipped-container-chevron">
        <SiteHeader hasColor={true} />
      </div>
    </div>
  );
}
