import React, { FC } from "react";

import { DefaultColor } from "../../definitions/colors";
import { SettingsProvider } from "../features/settings/SettingsContext";
import { MenuControlProvider } from "../features/menu/MenuControlContext";
import SiteLayout from "./SiteLayout";

interface Props {
  primary_color?: DefaultColor;
  accent_color?: DefaultColor;
  text_color?: DefaultColor;
  children?: React.ReactNode;
}

const SiteWrapper: FC<Props> = ({ children, ...colors }) => (
  <SettingsProvider>
    <MenuControlProvider>
      <SiteLayout {...colors}>{children}</SiteLayout>
    </MenuControlProvider>
  </SettingsProvider>
);

export default SiteWrapper;
