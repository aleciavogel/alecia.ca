import classNames from 'classnames'

import { NavCardBlockType } from '@alecia/block-types'
import NavCardImage from '@alecia/blocks-ui/nav-card-image'
import NavCardList from '@alecia/blocks-ui/nav-card-list'
import Typography from '@alecia/ui-kit/ui/typography'
import { cn } from '@alecia/util/styles'

const NavCard = (props: NavCardBlockType) => {
  const { pretitle, title, image, links } = props
  const hasImage = image !== null

  return (
    <div
      className={cn(
        'container mx-auto px-12 md:px-20 relative ',
        classNames({
          'max-md:grid md:flex md:items-start': hasImage,
          'lg:gap-4 xl:gap-10': hasImage,
        }),
      )}
    >
      {hasImage ? <NavCardImage {...props} /> : null}
      <div
        // White backdrop for container (either a pseudo-element or the bg)
        className={cn(
          'text-center w-full relative z-[2]',
          'pt-10 pb-14 px-8 xl:px-20 box-border',
          classNames({
            'flex-grow': hasImage,
            'after:content[""] after:block after:h-full': hasImage,
            'after:w-full md:after:w-[120%]': hasImage,
            'after:bg-white': hasImage,
            'after:absolute after:top-0 after:right-0': hasImage,
            'after:z-[-1]': hasImage,
            'after:rounded-lg': hasImage,
          }),
          classNames({
            'bg-white rounded-lg': !hasImage,
            'mx-auto overflow-hidden': !hasImage,
            'max-w-screen-md': !hasImage,
          }),
        )}
      >
        <Typography variant="blockPretitle" className="mb-2 dark:text-primary-600">
          {pretitle}
        </Typography>
        <Typography variant="blockTitle" className="mb-8 dark:text-primary-800">
          {title}
        </Typography>
        <NavCardList links={links} />
      </div>
    </div>
  )
}

export default NavCard
