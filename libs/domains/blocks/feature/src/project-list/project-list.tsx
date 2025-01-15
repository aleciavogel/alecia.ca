import type { FC } from 'react'

import { ProjectCard } from '@alecia/projects-ui'
import type { AllProjectsQueryResult } from '@alecia/sanity-types'
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
        <ProjectCard key={project._id} {...project} changeOnDarkMode />
      ))}
    </div>
  )
}
