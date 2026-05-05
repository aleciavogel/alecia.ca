import { useEffect, useState } from 'react'

interface ScrollListenerParams {
  selector?: string // Selector for the container you want to track
  offset?: number // Optional offset to account for additional spacing
}

export const useScrollListener = ({
  selector = '#site-wrapper',
  offset = 0,
}: ScrollListenerParams) => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollYProgress, setScrollYProgress] = useState(0)

  useEffect(() => {
    const container = document.querySelector(selector) as HTMLElement | null

    if (!container) {
      console.error(`Container with selector "${selector}" not found.`)
      return
    }

    const onScroll = () => {
      const containerTop = container.offsetTop
      const containerHeight = container.scrollHeight
      const currentScroll = window.scrollY

      const relativeScroll = currentScroll - containerTop
      const totalScrollable = containerHeight - offset - window.innerHeight

      const progress = Math.min(Math.max((relativeScroll / totalScrollable) * 100, 0), 100)

      setScrollY(currentScroll)
      setScrollYProgress(progress)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [offset, selector])

  return {
    scrollY,
    scrollYProgress,
  }
}
