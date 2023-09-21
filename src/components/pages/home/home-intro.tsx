import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import AleciaPic from '@/images/alecia_bw.png'

const HomeIntro: FC = () => {
  return (
    <section className="w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
      <div className="home-intro grid grid-cols-6 gap-10 pb-16 text-gray-700 dark:text-[var(--textBody)]">
        <div className="col-span-3 -mt-12">
          <div className="text-5xl mb-6">👋</div>
          <h2 className="font-serif-small text-4xl leading-10">
            Hey there,
            <br />
            <span className="text-6xl text-primary-600 dark:text-primary-500">
              I&apos;m Alecia Vogel
            </span>
          </h2>
          <div className="mt-4 text-lg space-y-4">
            <p>Welcome to my little corner of the internet!</p>
            <p>
              I&apos;m a self-taught{' '}
              <strong className="font-bold">Senior Full-Stack Software Developer</strong> based in
              Edmonton, Alberta, and have been coding since I was 8 years old.
            </p>
            <p>
              From video chat platforms to exam administration software, I&apos;ve had a hand in
              creating and maintaining products that have been used by millions of people across the
              globe. I&apos;m thrilled to share what I&apos;ve learned through these experiences
              with you!
            </p>
          </div>
          <div className="mt-8">
            <Link href="/about/alecia" className="zigzag-link text-lg">
              Learn More <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <Image src={AleciaPic} alt="Alecia" />
        </div>
      </div>
    </section>
  )
}

export default HomeIntro
