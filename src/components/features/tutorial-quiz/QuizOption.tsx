import { type FC } from 'react'
import { Cross2Icon, CheckIcon } from '@radix-ui/react-icons'

import { RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

interface QuizOptionProps {
  option: string
  wasSelected: boolean
  index: number
  isCorrect: boolean
}

const QuizOption: FC<QuizOptionProps> = ({ option, index, wasSelected, isCorrect = false }) => {
  const RadioIcon = isCorrect ? CheckIcon : Cross2Icon
  const inputId = `chapter-quiz-option-${index}`
  const normalStyles = 'text-[var(--textBody)]'
  const disabledStyles = wasSelected && !isCorrect ? 'line-through opacity-50' : ''
  const selectedStyles =
    wasSelected && isCorrect
      ? 'bg-accent-500 dark:bg-accent-300 border-accent-500 dark:border-accent-300'
      : ''
  const selectedIconStyles =
    wasSelected && isCorrect
      ? 'text-white dark:text-gray-900'
      : 'text-accent-500 dark:text-accent-300'

  return (
    <div className={cn('col-span-4 md:col-span-2 flex flex-row space-x-3')}>
      <RadioGroupItem
        checked={wasSelected}
        id={inputId}
        value={index.toString()}
        disabled={!isCorrect && wasSelected}
        className={cn(selectedStyles)}
        iconClassName={cn(selectedIconStyles)}
      >
        <RadioIcon className={cn('h-3.5 w-3.5', selectedIconStyles)} />
      </RadioGroupItem>
      <Label htmlFor={inputId} className={cn('cursor-pointer', normalStyles, disabledStyles)}>
        {option}
      </Label>
    </div>
  )
}

export default QuizOption
