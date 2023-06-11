"use client";

import { useRef } from "react";

import PostInfo from "./ArticleInfo";
import SiteHeader from "@/components/site/SiteHeader";
import ReadingProgress from "./ReadingProgress";
import { usePathname } from "next/navigation";

interface Props {
  timeToRead: string;
  data: any;
  children?: string | React.ReactNode;
}

export default function ArticleMain({ data, children, timeToRead }: Props) {
  const articleBodyRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  return (
    <div
      id="article-main"
      className="relative overflow-hidden pb-16 pt-48 mt-[-152px] z-40 leading-loose h-full"
    >
      <ReadingProgress target={articleBodyRef} />
      <PostInfo data={data} timeToRead={timeToRead} />
      <div ref={articleBodyRef}>
        <div className="page-content">{children}</div>
      </div>

      <div className="clipped-container">
        <SiteHeader hasColor={true} />
      </div>
    </div>
  );
}
