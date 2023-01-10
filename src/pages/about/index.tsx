import React, { FC } from "react";
import SiteWrapper from "../../components/features/site/SiteWrapper";
import AboutHeader from "../../components/features/about/AboutHeader";
import AboutMain from "../../components/features/about/AboutMain";
import SEO from "../../components/features/site/SEO";

const AboutIndex: FC = () => {
  return (
    <SiteWrapper>
      <SEO title="About" />
      <AboutHeader />
      <AboutMain />
    </SiteWrapper>
  );
};

export default AboutIndex;
