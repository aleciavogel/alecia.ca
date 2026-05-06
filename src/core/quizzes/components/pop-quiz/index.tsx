'use client'

import { useCallback, useMemo, useRef, useState } from 'react'
import Confetti from 'react-dom-confetti'
import { faCheck, faLightbulb, faXmark } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGSAP } from '@gsap/react'
import classNames from 'classnames'
import gsap from 'gsap'
import type { PortableTextBlock, PortableTextComponents } from 'next-sanity'
import { PortableText } from 'next-sanity'

import { RadioCardItem, RadioCardRoot } from '@alecia/common/ui/radio-cards'
import Typography from '@alecia/common/ui/typography'
import { cn } from '@alecia/util/styles'

const explanationComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-sm leading-relaxed text-primary-200">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="px-1 py-0.5 rounded bg-primary-700 text-accent-300 font-mono text-xs">
        {children}
      </code>
    ),
  },
}

const ExplanationReveal = ({ explanation }: { explanation: PortableTextBlock[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      gsap.set(el, { overflow: 'hidden' })
      gsap.from(el, {
        height: 0,
        opacity: 0,
        y: -12,
        duration: 0.55,
        ease: 'power3.out',
        delay: 0.1,
        onComplete: () => gsap.set(el, { clearProps: 'height,overflow,y' }),
      })
    },
    { scope: containerRef },
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        'rounded-xl border-l-4 border-accent-500',
        'bg-primary-900 dark:bg-primary-950',
        'px-6 py-5',
        'flex gap-4',
      )}
    >
      <FontAwesomeIcon icon={faLightbulb} className="text-accent-400 mt-0.5 shrink-0 text-lg" />
      <div className="space-y-2 min-w-0">
        <Typography variant="h6" className="text-accent-300 uppercase tracking-wider text-xs">
          Explanation
        </Typography>
        <PortableText value={explanation} components={explanationComponents} />
      </div>
    </div>
  )
}

const CONFETTI_CONFIG = {
  angle: 90,
  spread: 200,
  startVelocity: 30,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

// TODO: Use SanityTypes to define the props
interface QuizProps {
  question: string
  answers: string[]
  correctAnswer: number
  nextSectionTitle: string
  nextSectionDescription: string
  href: string
  explanation?: PortableTextBlock[] | null
  previousGuess?: number
  onAnswer?: (guess: number) => void
}

export const PopQuiz = ({
  question,
  answers,
  correctAnswer,
  explanation,
  previousGuess,
  onAnswer,
}: QuizProps) => {
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
      onAnswer?.(newGuess)
    },
    [correctAnswer, onAnswer],
  )

  return (
    <section id="quiz" className="relative w-full max-w-screen-lg mx-auto space-y-10">
      {/* Confetti rendered here so it isn't clipped by the radio card overflow */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none">
        <Confetti active={showConfetti} config={CONFETTI_CONFIG} />
      </div>
      <div className="flex items-center space-x-5">
        <Typography as="h2" variant="mini-title" className="">
          Test your knowledge
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

      <RadioCardRoot
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
            </RadioCardItem>
          )
        })}
      </RadioCardRoot>

      {hasAnswered && explanation && explanation.length > 0 && (
        <ExplanationReveal explanation={explanation} />
      )}
    </section>
  )
}
