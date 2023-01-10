import React, { FC } from "react";
import SiteWrapper from "../components/features/site/SiteWrapper";
import SEO from "../components/features/site/SEO";
import NotFoundHeader from "../components/features/not-found/NotFoundHeader";

const NotFound: FC = () => {
  return (
    <SiteWrapper>
      <SEO title="Page Not Found" />
      <NotFoundHeader />
    </SiteWrapper>
  );
};

export default NotFound;
