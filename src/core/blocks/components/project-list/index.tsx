import { ThumbnailDimensions } from '@alecia/constants/images'
import ProjectCard from '@alecia/core/projects/components/card'
import { cn } from '@alecia/util/styles'
import type { AllProjectsQueryResult } from '@alecia/vendors/sanity/types/sanity.types'
import { urlFor } from '@alecia/vendors/sanity/util/client/sanity-image-utils'

interface ProjectListProps {
  projects?: AllProjectsQueryResult
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className={cn('page-content-block grid grid-cols-1 gap-8 md:grid-cols-2')}>
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

export default ProjectList
