import React, { FC } from "react";
import SiteWrapper from "../../components/site/SiteWrapper";
import AboutHeader from "../../components/features/about/AboutHeader";
import AboutMain from "../../components/features/about/AboutMain";

const AboutIndex: FC = () => {
  return (
    <SiteWrapper>
      <AboutHeader />
      <AboutMain />
    </SiteWrapper>
  );
};

export default AboutIndex;
