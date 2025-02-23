import { NavIconsBlockType } from '@alecia/block-types'
import IconNavList from '@alecia/blocks-ui/icon-nav-list'
import Typography from '@alecia/ui-kit/ui/typography'
import { cn } from '@alecia/util/styles'

const NavIcons = ({
  title = 'Untitled',
  pretitle = 'Pretitle',
  description = '',
  links,
}: NavIconsBlockType) => {
  return (
    <div
      className={cn(
        'container mx-auto',
        'flex flex-col md:flex-row md:justify-center md:items-center',
        'gap-8 md:gap-24',
        'px-14 md:px-20',
        'relative',
      )}
    >
      <div className="md:flex md:max-w-[340px]">
        <div className="max-md:text-center">
          {pretitle ? (
            <Typography variant="blockPretitle" className="mb-4">
              {pretitle}
            </Typography>
          ) : null}
          <Typography variant="blockTitle" className="mb-2">
            {title}
          </Typography>
          <Typography
            variant="p"
            className="text-primary-950 dark:text-primary-300 max-w-[300px] max-md:mx-auto lg:text-[1.125rem] lg:leading-relaxed"
          >
            {description}
          </Typography>
        </div>
      </div>
      <div className={cn('w-full relative z-[2]', 'col-span-2 max-w-screen-sm max-md:mx-auto')}>
        <IconNavList links={links} />
      </div>
    </div>
  )
}

export default NavIcons
