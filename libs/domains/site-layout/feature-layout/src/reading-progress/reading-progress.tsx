'use client'

import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import type LocomotiveScroll from 'locomotive-scroll'

import { cn } from '@alecia/util'

export const ReadingProgress: FC = () => {
  const loco = useLocomotiveScroll()
  const scroll = loco.scroll as LocomotiveScroll | null
  const [readingProgress, setReadingProgress] = useState(0)

  const scrollListener = (windowScrollTop: number): void => {
    const progress = windowScrollTop - window.innerHeight
    const blogPostHeight = document.getElementById('post-content')?.scrollHeight ?? 0
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
    if (scroll) {
      scroll.on('scroll', (event) => {
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
      className={cn('fixed w-full block top-0 z-[100] h-[6px] rounded-r-[2px]')}
    >
      <div
        className={cn(
          'absolute w-full h-full right-full transform-gpu',
          'transition-all duration-100 ease-linear',
          'bg-accent-400',
        )}
        style={{ transform: `translateX(${String(readingProgress)}%)` }}
      />
    </div>
  )
}
