import type { FC } from 'react'

import { SadieAteMyWebsiteIllustration, Typography } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface EmptyStateProps {
  className?: string
  resolve?: string
  message?: string
}

export const EmptyState: FC<EmptyStateProps> = ({
  className,
  message = 'Looks like Sadie ate the content for this page :(',
  resolve = 'Maybe try again later.',
}) => (
  <div
    className={cn(
      'page-content-block',
      'flex flex-col items-center justify-center',
      'gap-8',
      'w-full h-full',
      'text-center',
      className,
    )}
  >
    <SadieAteMyWebsiteIllustration className="w-full max-w-[600px]" />
    <div className="text-center flex flex-col justify-center items-center">
      <Typography
        variant="lead"
        className="leading-normal text-primary-950/70 dark:text-primary-300/70"
      >
        {message}
      </Typography>
      <Typography
        variant="lead"
        className="leading-normal text-primary-950/70 dark:text-primary-300/70"
      >
        {resolve}
      </Typography>
    </div>
  </div>
)
