import React, { FC, useState, useEffect } from "react";

interface Props {
  target: React.RefObject<HTMLDivElement>;
}

const ReadingProgress: FC<Props> = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }
    const element = target.current;
    const windowScrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
    const progress = windowScrollTop - window.innerHeight - 152;
    const percent = (progress / element.clientHeight) * 100;

    if (progress <= 0) {
      return setReadingProgress(0);
    }
    if (percent >= 100) {
      return setReadingProgress(100);
    }
    setReadingProgress(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);
  return (
    <div
      data-scrolldata-scroll
      data-scroll-sticky
      data-scroll-target="#page-content"
      style={{ transform: `translateX(${readingProgress}%)` }}
      id="reading-progress"
    ></div>
  );
};

export default ReadingProgress;
