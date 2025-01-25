import Typography from '@alecia/ui-kit/ui/typography'
import { cn } from '@alecia/util/styles'

export interface WavyHeaderIntroProps {
  pretitle: string
  title: string
  subtitle?: string
}

export const WavyHeaderIntro = ({ title, subtitle, pretitle }: WavyHeaderIntroProps) => (
  <div
    className={cn(
      'text-center md:text-left',
      'pt-10 md:pt-10 lg:pt-5',
      // 'border-2 border-solid border-red-100',
    )}
  >
    <Typography variant="pretitle" className="mb-2 md:mb-4">
      {pretitle}
    </Typography>
    <Typography variant="home-title" className="mb-2">
      {title}
    </Typography>
    {subtitle ? (
      <Typography variant="subtitle" className="px-6 md:px-0">
        {subtitle}
      </Typography>
    ) : null}
  </div>
)
