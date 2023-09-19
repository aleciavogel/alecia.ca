import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { type FC } from 'react'

const HireMeBanner: FC = () => {
  return (
    <section id="banner-hire-me" className={`hero-pattern-circuit-board`} role="complementary">
      <div className="sm:content-block">
        <h3 className="font-serif text-lg sm:text-3xl md:text-5xl lg:text-6xl tracking-wide mb-3">
          Need an extra hand?
        </h3>
        <p className="max-sm:px-6 text-sm sm:text-lg md:text-xl leading-relaxed mb-8 w-3/4 mx-auto">
          Well, I just so happen to have two of $apos;em.
        </p>
        <Link
          href="/work-with-me"
          className="btn-contained bg-static hover:bg-static-hover text-xs sm:text-lg max-sm:px-4"
        >
          Work with me
          <FontAwesomeIcon className="ml-3" icon={faArrowRightLong} />
        </Link>
      </div>
    </section>
  )
}

export default HireMeBanner
