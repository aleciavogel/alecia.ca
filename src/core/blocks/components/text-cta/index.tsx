import { stegaClean } from '@sanity/client/stega'
import { PortableTextBlock } from 'next-sanity'

import { IconButtonLink } from '@alecia/common/ui/icon-button-link'
import Typography from '@alecia/common/ui/typography'
import { TextCTABlockType } from '@alecia/core/blocks/types'
import BlogPortableText from '@alecia/core/blog/components/blog-portable-text'
import { cn } from '@alecia/util/styles'

const TextCTA = ({
  title = 'Untitled',
  pretitle = 'Pretitle',
  body,
  link,
  shouldUseLinkIcon,
  linkIcon,
  icon,
}: TextCTABlockType) => {
  const cleanedLink = stegaClean(link)

  return (
    <div
      className={cn(
        'flex flex-col md:flex-row md:justify-center gap-10 md:gap-20',
        'page-content-block',
        'relative',
      )}
    >
      <div className="h-full md:flex md:max-w-[430px] md:items-center md:justify-self-stretch">
        <div className="max-md:text-center">
          {pretitle ? (
            <Typography variant="blockPretitle" className="mb-4">
              {pretitle}
            </Typography>
          ) : null}
          <Typography variant="blockTitle" className="text-primary-700 dark:text-primary-300 mb-6">
            {title}
          </Typography>

          {link ? (
            <IconButtonLink
              href={cleanedLink?.slug}
              variant="outline"
              size="lg"
              iconName={shouldUseLinkIcon ? linkIcon : icon?.name}
            >
              {link.label}
            </IconButtonLink>
          ) : null}
        </div>
      </div>
      <div className="flex-grow space-y-6 max-w-screen-sm">
        <BlogPortableText value={body as PortableTextBlock[]} />
      </div>
    </div>
  )
}

export default TextCTA
