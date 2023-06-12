"use client";
import { useState, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import AleciaCouch from "@/components/vectors/AleciaCouchSvg";
import RotatingText from "./RotatingText";

export default function AboutHeader() {
  const { scroll } = useLocomotiveScroll();
  const [scrollPercent, setScrollPercent] = useState(0);

  const scrollListener = (windowScrollTop: number) => {
    const progress = windowScrollTop;
    const percent = (progress / window.innerHeight) * 1.1;

    if (percent <= 0) {
      return setScrollPercent(0);
    }
    if (percent >= 100) {
      return setScrollPercent(100);
    }
    setScrollPercent(percent);
  };

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (event: any) => {
        scrollListener(event.scroll.y);
      });
    }
  }, [scroll]);

  return (
    <section className="about-header">
      <div className="couch-wrapper">
        <div
          style={{ opacity: 1 - scrollPercent }}
          className="transition-opacity duration-300 ease-out"
        >
          <RotatingText className="spinning-text" />
        </div>
        <div className="couch-svg">
          <AleciaCouch />
        </div>
      </div>
    </section>
  );
}
