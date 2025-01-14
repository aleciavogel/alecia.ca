interface ExperimentPageProps {
  params: {
    slug: string
  }
}

// TODO: implement this page
export default async function ExperimentPage({ params: { slug } }: ExperimentPageProps) {
  return <div>I will be an experiment page (non-intercepted)</div>
}
