import { type FC } from 'react'

const MorePostsBanner: FC = () => {
  return (
    <section
      id="banner-under-construction"
      className={`hero-pattern-squiggles bottom-banner`}
      role="complementary"
    >
      <div className="sm:content-block">
        <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-3">
          More Like This
        </h3>
        <div></div>
      </div>
    </section>
  )
}

export default MorePostsBanner
