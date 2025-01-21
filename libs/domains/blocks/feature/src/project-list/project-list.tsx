import type { FC } from 'react'

import { ThumbnailDimensions } from '@alecia/constants'
import { ProjectCard } from '@alecia/projects-ui'
import type { AllProjectsQueryResult } from '@alecia/sanity-types'
import { urlFor } from '@alecia/sanity-util'
import { cn } from '@alecia/util'

interface ProjectListProps {
  projects?: AllProjectsQueryResult
}

export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <div
      className={cn('container mx-auto', 'grid grid-cols-1 gap-8 md:grid-cols-2', 'px-8 md:px-20')}
    >
      {projects?.map((project) => (
        <ProjectCard
          key={project._id}
          {...project}
          changeOnDarkMode
          imageSrc={
            project.mainImage
              ? urlFor(project.mainImage)
                  .width(ThumbnailDimensions.Width)
                  .height(ThumbnailDimensions.Height)
                  .fit('crop')
                  .url()
              : null
          }
          imageAlt={project.mainImage?.alt ?? project.title}
        />
      ))}
    </div>
  )
}
