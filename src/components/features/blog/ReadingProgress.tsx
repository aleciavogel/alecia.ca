import React, { FC, useState, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

interface Props {
  target: React.RefObject<HTMLDivElement>;
}

const ReadingProgress: FC<Props> = () => {
  const { scroll } = useLocomotiveScroll();
  const [readingProgress, setReadingProgress] = useState(100);
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
};

export default ReadingProgress;
