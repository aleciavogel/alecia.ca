import AboutHeader from "@/components/pages/about/AboutHeader";
import AboutMain from "@/components/pages/about/AboutMain";
import SiteWrapper from "@/components/site/SiteWrapper";

export default function Home() {
  return (
    <SiteWrapper>
      <AboutHeader />
      <AboutMain />
    </SiteWrapper>
  );
}
