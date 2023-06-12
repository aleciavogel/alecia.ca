import { Metadata } from "next";

import SiteWrapper from "@/components/site/SiteWrapper";
import BlogIndexHeader from "@/components/blog/index/BlogIndexHeader";
import AboutMain from "@/components/pages/about/AboutMain";

export default function BlogIndexPage() {
  return (
    <SiteWrapper>
      <BlogIndexHeader />
      <AboutMain />
    </SiteWrapper>
  );
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Blog | Alecia.ca`,
  };
}
