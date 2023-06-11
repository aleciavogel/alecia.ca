import { useState, useEffect, RefObject } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function ReadingProgress({ target }: { target: RefObject<HTMLDivElement> }) {
  const { scroll } = useLocomotiveScroll();
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollListener = (windowScrollTop: number) => {
    const progress = windowScrollTop - window.innerHeight - 300;
    const percent = (progress / document.body.scrollHeight) * 100;

    if (progress <= 0) {
      return setReadingProgress(0);
    }
    if (percent >= 100) {
      return setReadingProgress(100);
    }
    setReadingProgress(percent);
  };

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (event: any) => {
        scrollListener(event.scroll.y);
      });
    }
  }, [scroll]);

  return (
    <div
      data-scroll
      data-scroll-sticky
      data-scroll-target="#site-wrapper"
      data-scroll-speed="1"
      id="reading-progress"
    >
      <div style={{ transform: `translateX(${readingProgress}%)` }}></div>
    </div>
  );
}
