import React, { FC } from "react";

import { DefaultColor } from "../../definitions/colors";
import { MenuControlProvider } from "../features/menu/MenuControlContext";
import SiteLayout from "./SiteLayout";

interface Props {
  primary_color?: DefaultColor;
  accent_color?: DefaultColor;
  text_color?: DefaultColor;
  children?: React.ReactNode;
}

const SiteWrapper: FC<Props> = ({ children, ...colors }) => (
  <MenuControlProvider>
    <SiteLayout {...colors}>{children}</SiteLayout>
  </MenuControlProvider>
);

export default SiteWrapper;
