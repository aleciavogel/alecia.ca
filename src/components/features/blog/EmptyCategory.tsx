import { type FC } from 'react'
import AleciaIdeaSvg from '@/components/vectors/AleciaIdeaSvg'

const EmptyCategory: FC = () => {
  return (
    <div className="mx-auto text-center">
      <div>
        <AleciaIdeaSvg className="block h-80 w-80" />
      </div>
      <p>There are no posts in this category yet.</p>
    </div>
  )
}

export default EmptyCategory
