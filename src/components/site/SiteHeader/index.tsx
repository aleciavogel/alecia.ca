import React, { FC } from "react";

import ThemeSettings from "./ThemeSettings";
import MenuIcon from "../../common/MenuIcon";
import SiteLogo from "./SiteLogo";
import HeaderRight from "./HeaderRight";

interface Props {
  hasColor?: boolean;
  hover?: boolean;
}

const SiteHeader: FC<Props> = ({ hover = false, hasColor = false }) => {
  const hoverClass = hover ? "site-header-hover" : "";
  const colorClass = hasColor ? "site-header-color" : hover ? "text-transparent" : "text-white";
  const className = `site-header ${colorClass} ${hoverClass}`;

  return (
    <header data-scroll data-scroll-sticky data-scroll-target="#site-wrapper" aria-hidden={!hover} className={className}>
      <SiteLogo hover={hover} />
      <HeaderRight>
        <MenuIcon hover={hover} />
        <ThemeSettings hover={hover} />
      </HeaderRight>
    </header>
  );
};

export default SiteHeader;
