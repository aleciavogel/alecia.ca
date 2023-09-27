import { type FC } from 'react'
import OtherPostsItem from './post-card'

import { getPostBySlug } from '@/features/blog/utils'

interface MorePostsBannerProps {
  relatedPosts?: string[]
}

const MorePostsBanner: FC<MorePostsBannerProps> = ({ relatedPosts }) => {
  const relatedPostsList = relatedPosts?.map((slug) => getPostBySlug(slug))

  return (
    <section
      id="banner-under-construction"
      className={`hero-pattern-squiggles bottom-banner`}
      role="complementary"
    >
      <div className="sm:container">
        <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-8">
          You might also enjoy...
        </h3>
        <div className="px-16 md:px-20 grid grid-cols-6 gap-8">
          {relatedPostsList?.map((post, index) => (
            <div key={`related-${index}`} className="col-span-6 md:col-span-2">
              <OtherPostsItem {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MorePostsBanner
