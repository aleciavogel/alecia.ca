import { pageVariants } from '@alecia/pages-constants'
import { AllProjectsQueryResult } from '@alecia/sanity-types'
import { StickyNav } from '@alecia/site-navigation'
import { HammondSleepingIllustration, Typography } from '@alecia/ui-kit'
import { calcWavyBorderMask, cn } from '@alecia/util'

import { ProjectCard } from '..'

type SingleProject = AllProjectsQueryResult[number]

const WAVY_BORDER_MASK = { mask: calcWavyBorderMask({ position: 'bottom' }) }

interface RelatedProjects extends SingleProject {
  imageSrc?: string
}

interface ProjectPreFooterProps {
  relatedProjects?: RelatedProjects[]
}

export const ProjectPreFooter = ({ relatedProjects = [] }: ProjectPreFooterProps) => {
  return (
    <main
      className={cn(
        'w-full',
        'relative',
        'md:pt-[200px]',
        '-mt-[var(--triangle-height)]',
        'mb-[-25px]',
        'pb-16 md:pb-48',
        'z-50',
        'flex flex-col gap-24 lg:gap-36',
      )}
    >
      <div className="page-container max-xl:page-content-block space-y-6 lg:space-y-12">
        <div className="grid md:grid-cols-2 max-md:gap-12">
          <Typography variant="h2" as="h3" className="text-white max-md:text-center">
            More Projects
          </Typography>
          <div className="relative max-md:order-first max-md:flex max-md:justify-center">
            <HammondSleepingIllustration className="w-full md:-mt-[43%]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {relatedProjects?.map((proj) => (
            <ProjectCard key={proj.slug} {...proj} />
          ))}
        </div>
      </div>
      <div
        className={cn(
          pageVariants({ variant: 'angled-reverse' }),
          'bg-gradient-to-t from-primary-950 to-fuchsia-600',
        )}
        style={WAVY_BORDER_MASK}
      >
        <StickyNav className="text-white" />
      </div>
    </main>
  )
}
