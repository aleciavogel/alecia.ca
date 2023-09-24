import { type FC } from 'react'

import PageMain from '@/components/pages/PageMain'
import TutorialItem from '@/components/features/tutorials/TutorialItem'
import { fetchAllTutorialInfo } from '@/lib/tutorials'

const AdvancedProjectsMain: FC = () => {
  const tutorials = fetchAllTutorialInfo()

  return (
    <PageMain variant="chevron" className="bg-gray-100">
      <ul className="px-16 md:px-20 grid grid-cols-6 gap-8">
        {tutorials?.map((tutorial) => (
          <TutorialItem key={`${tutorial.id.split('/')[1]}`} {...tutorial} />
        ))}
      </ul>
    </PageMain>
  )
}

export default AdvancedProjectsMain
