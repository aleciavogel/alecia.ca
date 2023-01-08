import React, { FC, useRef } from "react";
import { useLocation } from "@reach/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import { DefaultColor } from "../../definitions/colors";
import { MenuControlProvider } from "../features/menu/MenuControlContext";
import SiteLayout from "./SiteLayout";

interface Props {
  primary_color?: DefaultColor;
  accent_color?: DefaultColor;
  text_color?: DefaultColor;
  children?: React.ReactNode;
}

const SiteWrapper: FC<Props> = ({ children, ...colors }) => {
  const containerRef = useRef(null);
  const location = useLocation();

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={containerRef}
      location={location.pathname}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
    >
      <div data-scroll-container ref={containerRef}>
        <MenuControlProvider>
          <SiteLayout {...colors}>{children}</SiteLayout>
        </MenuControlProvider>
      </div>
    </LocomotiveScrollProvider>
  );
};
export default SiteWrapper;
