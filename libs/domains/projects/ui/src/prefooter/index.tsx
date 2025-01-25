import HammondSleepingIllustration from '@alecia/graphics/illustrations/hammond/sleeping'
import { pageVariants } from '@alecia/pages-constants/page-variants'
import { AllProjectsQueryResult } from '@alecia/sanity-types/sanity.types'
import StickyNav from '@alecia/site-navigation/sticky-nav'
import Typography from '@alecia/ui-kit/ui/typography'
import { calcWavyBorderMask, cn } from '@alecia/util/styles'

import ProjectCard from '../card'

type SingleProject = AllProjectsQueryResult[number]

const WAVY_BORDER_MASK = { mask: calcWavyBorderMask({ position: 'bottom' }) }

interface RelatedProjects extends SingleProject {
  imageSrc?: string
}

interface ProjectPreFooterProps {
  relatedProjects?: RelatedProjects[]
}

const ProjectPreFooter = ({ relatedProjects = [] }: ProjectPreFooterProps) => {
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

export default ProjectPreFooter
