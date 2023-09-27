'use client'

import { type FC } from 'react'
import Image from 'next/image'

import AleciaPic from '@/img/alecia_bw.png'
import LerpLink from '@/features/scroll/components/LerpLink'

const HomeIntro: FC = () => {
  return (
    <section className="w-full px-16 md:px-20 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
      <div className="home-intro grid grid-cols-6 gap-10 pb-16 text-gray-700 dark:text-[var(--textBody)]">
        <div className="col-span-6 lg:col-span-3 -mt-24 md:-mt-12" data-scroll>
          <div className="text-5xl mb-6 in-view:wave" data-scroll data-scroll-speed={1}>
            <span>👋</span>
          </div>
          <h2
            className="font-serif-small text-2xl md:text-4xl leading-10"
            data-scroll
            data-scroll-speed={1}
          >
            <span className="inline-block">Hey there,</span>
            <br />
            <span className="text-4xl md:text-6xl text-primary-600 dark:text-primary-500">
              I&apos;m Alecia Vogel
            </span>
          </h2>
          <div className="mt-4 text-base md:text-lg space-y-4">
            <p data-scroll data-scroll-speed={1}>
              Welcome to my little corner of the internet!
            </p>
            <p data-scroll data-scroll-speed={1}>
              I&apos;m a self-taught{' '}
              <strong className="font-bold">Senior Full-Stack Software Developer</strong> based in
              Edmonton, Alberta, and have been coding since I was 8 years old.
            </p>
            <p data-scroll data-scroll-speed={1}>
              From video chat platforms to exam administration software, I&apos;ve had a hand in
              creating and maintaining products that have been used by millions of people around the
              world. I&apos;m thrilled to share what I&apos;ve learned through these experiences
              with you!
            </p>
          </div>
          <div className="mt-4">
            <LerpLink href="/about/alecia" className="text-lg">
              Get To Know Me &rarr;
            </LerpLink>
          </div>
        </div>
        <div
          className="col-span-6 lg:col-span-3"
          data-scroll
          data-scroll-speed={1.5}
          data-scroll-delay={0.5}
        >
          <Image src={AleciaPic} alt="Alecia" />
        </div>
      </div>
    </section>
  )
}

export default HomeIntro
