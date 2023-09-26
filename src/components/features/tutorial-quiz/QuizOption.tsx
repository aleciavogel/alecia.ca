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

  return (
    <div className={cn('col-span-4 md:col-span-2 flex flex-row space-x-3')}>
      <RadioGroupItem
        checked={wasSelected}
        id={inputId}
        value={index.toString()}
        disabled={!isCorrect && wasSelected}
      >
        <RadioIcon className={cn('h-3.5 w-3.5', 'fill-primary-400')} />
      </RadioGroupItem>
      <Label
        htmlFor={inputId}
        className={cn('text-[var(--textBody)]', wasSelected && !isCorrect ? 'line-through' : '')}
      >
        {option}
      </Label>
    </div>
  )
}

export default QuizOption
