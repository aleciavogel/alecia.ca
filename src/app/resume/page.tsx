import { Metadata } from "next";

import SiteWrapper from "@/components/pages/shared/layout/SiteWrapper";
import ResumeHeader from "@/components/pages/resume/ResumeHeader";

import ResumeMain from "@/components/pages/resume/ResumeMain";

export default function BlogIndexPage() {
  return (
    <SiteWrapper>
      <ResumeHeader />
      <ResumeMain />
    </SiteWrapper>
  );
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Resume Playground | Alecia.ca`,
  };
}
