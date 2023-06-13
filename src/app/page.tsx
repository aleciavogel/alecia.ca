import { Metadata } from "next";

import AboutHeader from "@/components/pages/about/AboutHeader";
import AboutMain from "@/components/pages/about/AboutMain";
import SiteWrapper from "@/components/pages/shared/layout/SiteWrapper";

export default function Home() {
  return (
    <SiteWrapper>
      <AboutHeader />
      <AboutMain />
    </SiteWrapper>
  );
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `About Me | Alecia.ca`,
  };
}
