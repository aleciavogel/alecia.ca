"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import { DefaultColor } from "@/definitions/colors";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

interface Props {
  primary_color?: DefaultColor;
  accent_color?: DefaultColor;
  text_color?: DefaultColor;
  children?: React.ReactNode;
}

export default function SiteWrapper({ primary_color, accent_color, text_color, children }: Props) {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const colorClasses = `primary-${primary_color} accent-${accent_color} body-${text_color}`;

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      containerRef={containerRef}
      location={pathname}
      watch={[]}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
    >
      <div data-scroll-container ref={containerRef}>
        <div id="site-wrapper" className={`${colorClasses}`}>
          <SiteHeader />
          <SiteHeader hover={true} />

          {/* <StaticMenu /> */}
          {/* <SiteMenu /> */}

          {children}

          {/* <HireMeBanner /> */}
          <SiteFooter accent_color={accent_color} primary_color={primary_color} />
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
}
