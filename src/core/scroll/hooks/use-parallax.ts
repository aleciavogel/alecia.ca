'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface UseParallaxOptions {
  speed?: number
}

/**
 * Applies a GSAP ScrollTrigger parallax effect to the referenced element.
 * Replaces Locomotive Scroll's `data-scroll-speed` attribute.
 * @param speed - Parallax speed multiplier. Positive values move slower than scroll,
 *   negative values move in the opposite direction (like data-scroll-speed).
 */
export const useParallax = <T extends HTMLElement>({ speed = 1 }: UseParallaxOptions = {}) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Locomotive Scroll's speed values are subtle — a speed of 1 barely
    // shifts the element. We use a small pixel offset scaled by speed to
    // approximate that feel.
    const yAmount = speed * -50

    const tween = gsap.fromTo(
      el,
      { y: -yAmount },
      {
        y: yAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [speed])

  return ref
}
