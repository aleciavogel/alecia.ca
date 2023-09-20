'use client'

import { type FC, useState, useEffect } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

import AleciaCouch from '@/components/images/vectors/AleciaCouchSvg'
import RotatingText from './RotatingText'

const AboutHeader: FC = () => {
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
    <section className="about-header">
      <div className="couch-wrapper">
        <div
          style={{ opacity: 1 - scrollPercent }}
          className="transition-opacity duration-300 ease-out"
        >
          <RotatingText className="spinning-text" />
        </div>
        <div className="couch-svg">
          <AleciaCouch />
        </div>
      </div>
    </section>
  )
}

export default AboutHeader
