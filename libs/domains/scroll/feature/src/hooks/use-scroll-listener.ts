import { useEffect, useState } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import type LocomotiveScroll from 'locomotive-scroll'

interface ScrollListenerParams {
  selector?: string // Selector for the container you want to track
  offset?: number // Optional offset to account for additional spacing
}

export const useScrollListener = ({
  selector = '#site-wrapper',
  offset = 0,
}: ScrollListenerParams) => {
  const { scroll } = useLocomotiveScroll()
  const [scrollY, setScrollY] = useState(0)
  const [scrollYProgress, setScrollYProgress] = useState(0)

  useEffect(() => {
    if (!scroll) return

    const container = document.querySelector(selector) as HTMLElement | null

    if (!container) {
      console.error(`Container with selector "${selector}" not found.`)
      return
    }

    const onScroll = (event: any) => {
      const containerTop = container.offsetTop
      const containerHeight = container.scrollHeight
      const currentScroll = event.scroll.y

      // Calculate the progress of scrolling inside the container
      const relativeScroll = currentScroll - containerTop
      const totalScrollable = containerHeight - offset - window.innerHeight

      // Clamp the progress to the range [0, 100]
      const progress = Math.min(Math.max((relativeScroll / totalScrollable) * 100, 0), 100)

      setScrollY(currentScroll)
      setScrollYProgress(progress)
    }

    scroll.on('scroll', onScroll)

    return () => {
      scroll.off('scroll', onScroll)
    }
  }, [offset, scroll, selector])

  return {
    scrollY,
    scrollYProgress,
  }
}
