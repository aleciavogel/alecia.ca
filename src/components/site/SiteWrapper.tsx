import React, { FC } from "react";
import SiteHeader from "./SiteHeader";
import StaticMenu from "./StaticMenu";
import SiteFooter from "./SiteFooter";
import { DefaultColor } from "../../definitions/colors";
import HireMeBanner from "./HireMeBanner";
import { SettingsProvider } from "../features/settings/SettingsContext";

interface Props {
  primary_color?: DefaultColor;
  accent_color?: DefaultColor;
  text_color?: DefaultColor;
  children?: React.ReactNode;
}

const SiteWrapper: FC<Props> = ({
  children,
  primary_color = "indigo",
  accent_color = "pink",
  text_color = "gray",
}) => (
  <SettingsProvider>
    <div
      className={`relative h-full min-h-full w-full primary-${primary_color} accent-${accent_color} text-${text_color}`}
    >
      <SiteHeader />
      <SiteHeader hover={true} />

      <StaticMenu />

      {children}

      <HireMeBanner />
      <SiteFooter accent_color={accent_color} primary_color={primary_color} />
    </div>
  </SettingsProvider>
);

export default SiteWrapper;
