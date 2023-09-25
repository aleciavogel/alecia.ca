import { cn } from '@/lib/utils'
import { type FC } from 'react'

interface QuizOptionProps {
  option: string
  isSelected: boolean
}

const QuizOption: FC<QuizOptionProps> = ({ option, isSelected = false }) => {
  return (
    <div className={cn('col-span-4 md:col-span-2 flex flex-row space-x-3')}>
      <div
        className={cn(
          'border-2 border-primary-300 dark:border-primary-300 rounded-full h-5 w-5 flex-initial flex-shrink-0',
        )}
      >
        {isSelected && (
          <div
            className={cn(
              'rounded-full h-3 w-3 bg-primary-400 dark:bg-primary-200',
              'mx-auto my-0.5',
            )}
          />
        )}
      </div>
      <p className="text-[var(--textBody)]">{option}</p>
    </div>
  )
}

export default QuizOption
