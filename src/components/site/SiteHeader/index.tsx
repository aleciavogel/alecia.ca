import React, { FC } from "react";

import HeaderRight from "./HeaderRight";
import ThemeSettings from "./ThemeSettings";
import MenuIcon from "../../common/MenuIcon";
import SiteLogo from "./SiteLogo";
import { getLinkColor } from "../../../utils/colors";
import { DefaultColor } from "../../../definitions/colors";

interface Props {
  primary_color?: DefaultColor;
  accent_color?: DefaultColor;
  shade?: number;
  hover?: boolean;
}

const SiteHeader: FC<Props> = ({ primary_color, accent_color, shade, hover = false }) => {
  const link_color = getLinkColor(hover, primary_color, shade);

  return (
    <header
      aria-hidden={!hover}
      className={`text-base site-header ${link_color}${hover ? " site-header-hover" : ""}`}
    >
      <SiteLogo hover={hover} color={primary_color} />

      <HeaderRight>
        <MenuIcon />
        <ThemeSettings
          primary_color={primary_color ?? "indigo"}
          accent_color={accent_color ?? "pink"}
          shade={shade}
          hover={hover}
        />
      </HeaderRight>
    </header>
  );
};

export default SiteHeader;
