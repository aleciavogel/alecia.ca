import { type FC } from 'react'

const UnderConstructionBanner: FC = () => {
  return (
    <section
      id="banner-under-construction"
      className={`hero-pattern-squiggles bottom-banner`}
      role="complementary"
    >
      <div className="sm:content-block">
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-3">
          Under Construction
        </h3>
        <p className="max-sm:px-6 text-sm sm:text-lg md:text-xl leading-relaxed sm:w-3/4 w-full mx-auto">
          Some parts of my website may appear broken or incomplete. Come back soon for updates!
        </p>
      </div>
    </section>
  )
}

export default UnderConstructionBanner
