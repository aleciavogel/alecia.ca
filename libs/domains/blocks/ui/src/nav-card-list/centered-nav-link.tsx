import Link from 'next/link'

import Typography from '@alecia/ui-kit/ui/typography'
import { cn } from '@alecia/util/styles'

interface CenteredNavLinkProps {
  href: string
  title: string
  description: string
  className?: string
}

const CenteredNavLink = ({ className, href, title, description }: CenteredNavLinkProps) => (
  <Link
    href={href}
    className={cn(
      'block h-full',
      'rounded-sm overflow-hidden',
      'relative',
      'text-center',
      'transition-colors duration-200 ease-in-out',
      'bg-primary-100 hover:bg-primary-200',
      className,
    )}
  >
    <div className="p-10">
      <div className={cn('space-y-2')}>
        <Typography
          variant="p"
          className="text-primary-800 dark:text-primary-800 font-semibold uppercase tracking-wide md:text-sm lg:text-base"
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          className="text-primary-800 dark:text-primary-800 md:text-sm lg:text-base"
        >
          {description}
        </Typography>
      </div>
    </div>
  </Link>
)

export default CenteredNavLink
