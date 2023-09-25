import { type FC } from 'react'

import PageMain from '@/components/pages/PageMain'
import TutorialItem from '@/components/features/tutorials/TutorialItem'
import { Tutorials } from '@/config/tutorials'

const LearnToCodeMain: FC = () => {
  const tutorialKeys = Object.keys(Tutorials)

  return (
    <PageMain variant="chevron" className="bg-gray-100">
      <ul className="px-16 md:px-20 grid grid-cols-6 gap-8">
        {tutorialKeys?.map((key) => (
          <TutorialItem key={`tutorial-item-${key}`} id={key} {...Tutorials[key]} />
        ))}
      </ul>
    </PageMain>
  )
}

export default LearnToCodeMain
