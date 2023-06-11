import { useState, useEffect, RefObject } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function ReadingProgress({ target }: { target: RefObject<HTMLDivElement> }) {
  const { scroll } = useLocomotiveScroll();
  const [readingProgress, setReadingProgress] = useState(100);

  const scrollListener = (windowScrollTop: number) => {
    const progress = windowScrollTop - window.innerHeight;
    const blogPostHeight = document.getElementById("article-main")?.scrollHeight ?? 0;
    const percent = (progress / (blogPostHeight - 200)) * 100;

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
