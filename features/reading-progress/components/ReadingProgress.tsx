'use client'
import { type FC, useState, useEffect } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const ReadingProgress: FC = () => {
  const { scroll } = useLocomotiveScroll()
  const [readingProgress, setReadingProgress] = useState(0)

  const scrollListener = (windowScrollTop: number): void => {
    const progress = windowScrollTop - window.innerHeight
    const blogPostHeight = document.getElementById('article-main')?.scrollHeight ?? 0
    const percent = (progress / (blogPostHeight - 200)) * 100

    if (progress <= 0) {
      setReadingProgress(0)
      return
    }
    if (percent >= 100) {
      setReadingProgress(100)
      return
    }
    setReadingProgress(percent)
  }

  useEffect(() => {
    if (scroll !== undefined && scroll !== null) {
      scroll.on('scroll', (event: any) => {
        scrollListener(event.scroll.y)
      })
    }
  }, [scroll])

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
  )
}

export default ReadingProgress
