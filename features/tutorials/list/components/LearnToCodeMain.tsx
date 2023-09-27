import { type FC } from 'react'

import PageMain from '@/features/site-layout/wrappers/components/content-wrapper'
import TutorialItem from '@/features/tutorials/list/components/TutorialItem'
import { TUTORIAL_LIST } from '@/features/tutorials/constants'

const LearnToCodeMain: FC = () => {
  const tutorialKeys = Object.keys(TUTORIAL_LIST)

  return (
    <PageMain className="bg-gray-100">
      <ul className="px-16 md:px-20 grid grid-cols-6 gap-8">
        {tutorialKeys?.map((key) => (
          <TutorialItem key={`tutorial-item-${key}`} id={key} {...TUTORIAL_LIST[key]} />
        ))}
      </ul>
    </PageMain>
  )
}

export default LearnToCodeMain
