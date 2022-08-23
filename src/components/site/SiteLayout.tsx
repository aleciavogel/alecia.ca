import React, { FC } from "react";

import { DefaultColor } from "../../definitions/colors";
import SiteMenu from "./SiteMenu";
import SiteHeader from "./SiteHeader";
import StaticMenu from "./StaticMenu";
import HireMeBanner from "./HireMeBanner";
import SiteFooter from "./SiteFooter";
import useMenuControl from "../features/menu/useMenuControl";

interface Props {
  primary_color?: DefaultColor;
  accent_color?: DefaultColor;
  text_color?: DefaultColor;
  children?: React.ReactNode;
}

const SiteLayout: FC<Props> = ({
  children,
  primary_color = "indigo",
  accent_color = "pink",
  text_color = "gray",
}) => {
  const { menuOpen } = useMenuControl();
  const colorClasses = `primary-${primary_color} accent-${accent_color} body-${text_color}`;
  const menuClass = menuOpen ? "menu-open" : "";

  return (
    <div id="site-wrapper" className={`${colorClasses} ${menuClass}`}>
      <SiteHeader />
      <SiteHeader hover={true} />

      <StaticMenu />
      <SiteMenu />

      {children}

      <HireMeBanner />
      <SiteFooter accent_color={accent_color} primary_color={primary_color} />
    </div>
  );
};

export default SiteLayout;
