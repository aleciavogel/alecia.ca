import { ThumbnailDimensions } from '@alecia/constants/images'
import ProjectCard from '@alecia/projects-ui/card'
import type { AllProjectsQueryResult } from '@alecia/sanity-types/sanity.types'
import { urlFor } from '@alecia/sanity-util/client-utils/sanity-image-utils'
import { cn } from '@alecia/util/styles'

interface ProjectListProps {
  projects?: AllProjectsQueryResult
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className={cn('page-content-block grid grid-cols-1 gap-8 md:grid-cols-2 px-8 md:px-20')}>
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
