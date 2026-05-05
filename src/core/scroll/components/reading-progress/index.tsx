'use client'

import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { cn } from '@alecia/util/styles'

const ReadingProgress: FC = () => {
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const progress = window.scrollY - window.innerHeight
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

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
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

export default ReadingProgress
