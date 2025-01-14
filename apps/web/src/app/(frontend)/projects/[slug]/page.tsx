interface ProjectPageProps {
  params: {
    slug: string
  }
}

// TODO: implement this page
export default async function ProjectPage({ params: { slug } }: ProjectPageProps) {
  return <div>I will display a project</div>
}
