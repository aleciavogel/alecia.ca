import dynamic from 'next/dynamic'

import { Illustrations } from '@alecia/constants/images'
import AleciaWaveIllustration from '@alecia/graphics/illustrations/alecia/wave'
import { cn } from '@alecia/util/styles'

import { WavyHeaderIntro, WavyHeaderIntroProps } from './wavy-header-intro'

interface WavyHeaderProps extends WavyHeaderIntroProps {
  headerIllustration?: Illustrations | 'none'
}

const WavyText = dynamic(() => import('@alecia/animations-ui/wavy-text'))

const WavyHeader = ({ headerIllustration, ...props }: WavyHeaderProps) => (
  <header
    className={cn(
      'relative',
      'transition-dark-mode',
      'hero-padding',
      'md:pt-28 xl:pt-40',
      'after:z-[-1] after:content-[""] after:absolute after:inset-0',
      'after:bg-gradient-to-b after:from-primary-950 after:from-20% after:to-fuchsia-600',
    )}
  >
    <div className="w-full h-full overflow-hidden text-white/30 absolute top-1/2 md:top-[10%] md:visible">
      <WavyText className="-translate-x-12 md:-translate-x-72 absolute z-10 w-[200%] md:w-[150%]" />
    </div>
    <div className={cn('flex items-center justify-items-center px-8 md:px-20 page-container')}>
      <div
        className={cn(
          'w-full text-white',
          'grid grid-cols-1 md:grid-cols-2',
          'gap-6 md:gap-0 pb-8',
        )}
      >
        <div className="col-span-1 mt-10 md:mt-0 md:pt-20 lg:pt-32">
          <WavyHeaderIntro {...props} />
        </div>
        <div className="col-span-1 relative h-full z-[100] -mb-[150px]">
          <AleciaWaveIllustration className="w-[90%] max-w-[300px] md:max-w-full z-[100] mx-auto md:absolute md:top-0 md:right-0" />
        </div>
      </div>
    </div>
  </header>
)

export default WavyHeader
