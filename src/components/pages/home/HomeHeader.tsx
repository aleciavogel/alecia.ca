'use client'

import { type FC, useState, useEffect } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

import AleciaCouch from '@/components/vectors/AleciaCouchSvg'
import RotatingText from '@/components/features/home/RotatingText'
import { cn } from '@/lib/utils'

const HomeHeader: FC = () => {
  const { scroll } = useLocomotiveScroll()
  const [scrollPercent, setScrollPercent] = useState(0)

  const scrollListener = (windowScrollTop: number): void => {
    const progress = windowScrollTop
    const percent = (progress / window.innerHeight) * 1.1

    if (percent <= 0) {
      setScrollPercent(0)
      return
    }
    if (percent >= 100) {
      setScrollPercent(100)
      return
    }
    setScrollPercent(percent)
  }

  useEffect(() => {
    if (scroll !== undefined && scroll !== null) {
      scroll.on('scroll', (event: any) => {
        scrollListener(event.scroll.y)
      })
    }
  }, [scroll])

  return (
    <section
      className={cn(
        'lg:about-header',
        'relative z-0 overflow-hidden pointer-events-none',
        'pt-20',
        'transition-colors duration-300 ease-in-out',
        'bg-primary-800 dark:bg-primary-900',
        'h-[530px] md:h-[800px]',
      )}
    >
      <div className="absolute bottom-0 w-full">
        <div
          style={{ opacity: 1 - scrollPercent }}
          className="transition-opacity duration-300 ease-out"
        >
          <RotatingText
            className={cn(
              'spinning-text',
              'absolute left-1/2 transform -translate-x-1/2 -translate-y-[30px] lg:-translate-y-0',
              'w-[120%] lg:w-full max-w-[1250px]',
            )}
          />
        </div>
        <div className="couch-svg">
          <AleciaCouch />
        </div>
      </div>
    </section>
  )
}

export default HomeHeader
