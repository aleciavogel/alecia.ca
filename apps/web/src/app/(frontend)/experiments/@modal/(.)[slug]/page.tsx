import { InterceptedExperimentWrapper } from '@alecia/experiments'

export default function ExperimentModalPage({ params }: { params: { slug: string } }) {
  return (
    <InterceptedExperimentWrapper>
      <h2 className="text-3xl font-bold mb-4">Experiment {params.slug}</h2>
      <p className="text-gray-700">This is an intercepted modal route using GSAP.</p>
    </InterceptedExperimentWrapper>
  )
}
