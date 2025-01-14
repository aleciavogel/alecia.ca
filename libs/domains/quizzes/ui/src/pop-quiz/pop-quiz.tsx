'use client'

import type { FC } from 'react'
import { useCallback, useMemo, useState } from 'react'
import Confetti from 'react-dom-confetti'
import { faCheck, faXmark } from '@fortawesome/pro-solid-svg-icons'
import classNames from 'classnames'

import { RadioCardItem, RadioCards, Typography } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

const CONFETTI_CONFIG = {
  angle: 90,
  spread: 200,
  startVelocity: 30,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  colors: ['@/a864fd', '@/29cdff', '@/78ff44', '@/ff718d', '@/fdff6a'],
}

interface QuizProps {
  question: string
  answers: string[]
  correctAnswer: number
  nextSectionTitle: string
  nextSectionDescription: string
  href: string
  previousGuess?: number
}

export const PopQuiz: FC<QuizProps> = ({ question, answers, correctAnswer, previousGuess }) => {
  const [hasAnswered, setHasAnswered] = useState<boolean>(previousGuess !== undefined)
  const [guess, setGuess] = useState<number | undefined>(previousGuess)
  const isCorrect = useMemo(() => guess === correctAnswer, [guess, correctAnswer])
  const [showConfetti, setShowConfetti] = useState<boolean>(false)

  const handleGuess = useCallback(
    (value: string): void => {
      const newGuess = parseInt(value, 10)
      setGuess(newGuess)
      setHasAnswered(true)
      setShowConfetti(newGuess === correctAnswer)
    },
    [correctAnswer],
  )

  return (
    <section id="quiz" className="max-w-screen-sm space-y-10">
      <div className="flex items-center space-x-5">
        <Typography as="h2" variant="mini-title" className="">
          Unlock the next chapter
        </Typography>
        <div className="flex-grow block zigzag-base zigzag-bg-primary relative" />
      </div>

      <Typography
        variant="h4"
        size="3xl"
        className="font-serif text-primary-700 dark:text-primary-400"
      >
        {question}
      </Typography>

      <RadioCards
        className="grid grid-cols-2 gap-8"
        value={guess?.toString()}
        onValueChange={handleGuess}
        defaultChecked={hasAnswered}
        defaultValue={previousGuess?.toString()}
      >
        {answers.map((answer, index) => {
          const id = `r-${index.toString()}`
          const isCorrectAnswer = index === correctAnswer
          const isGuess = index === guess

          return (
            <RadioCardItem
              key={id}
              value={index.toString()}
              id={id}
              disabled={hasAnswered}
              className={cn(
                classNames({
                  'incorrect-guess': hasAnswered && isGuess && !isCorrectAnswer,
                  'revealed-answer': hasAnswered && !isGuess && isCorrectAnswer,
                  'correct-guess': hasAnswered && isGuess && isCorrectAnswer,
                  unselected: hasAnswered && !isGuess && !isCorrectAnswer,
                }),
              )}
              indicatorIcon={isCorrectAnswer || isCorrect ? faCheck : faXmark}
              checked={hasAnswered ? isGuess || isCorrectAnswer : false}
            >
              {answer}
              {isCorrectAnswer ? <Confetti active={showConfetti} config={CONFETTI_CONFIG} /> : null}
            </RadioCardItem>
          )
        })}
      </RadioCards>
    </section>
  )
}
