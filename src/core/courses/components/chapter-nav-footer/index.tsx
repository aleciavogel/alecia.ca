'use client'

import { useState } from 'react'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import Typography from '@alecia/common/ui/typography'
import { PopQuiz } from '@alecia/core/quizzes/components/pop-quiz'
import { cn } from '@alecia/util/styles'
import type { PopQuiz as PopQuizType } from '@alecia/vendors/sanity/types/sanity.types'

interface NextChapterData {
  title: string
  href: string
}

interface ChapterNavFooterProps {
  quiz?: PopQuizType | null
  nextChapter?: NextChapterData | null
  courseHref: string
}

const ChapterNavFooter = ({ quiz, nextChapter, courseHref }: ChapterNavFooterProps) => {
  const [quizPassed, setQuizPassed] = useState(false)

  const hasQuiz = quiz?.question && quiz?.answers && quiz.answers.length >= 2

  // Transform quiz answers for the PopQuiz component
  const quizAnswers = quiz?.answers?.map((a) => a.answer ?? '') ?? []
  const correctAnswerIndex = quiz?.answers?.findIndex((a) => a.correct) ?? 0

  const handleQuizAnswer = (guess: number) => {
    if (guess === correctAnswerIndex) {
      setQuizPassed(true)
    }
  }

  return (
    <div className="page-content-block space-y-12">
      {hasQuiz ? (
        <PopQuiz
          question={quiz.question!}
          answers={quizAnswers}
          correctAnswer={correctAnswerIndex}
          explanation={quiz.explanation as any}
          nextSectionTitle={nextChapter?.title ?? 'Next Chapter'}
          nextSectionDescription=""
          href={nextChapter?.href ?? courseHref}
          onAnswer={handleQuizAnswer}
        />
      ) : null}

      <div className="w-full max-w-screen-sm mx-auto space-y-4">
        {!hasQuiz ? (
          <div className="flex items-center space-x-5">
            <Typography as="h2" variant="mini-title">
              Continue
            </Typography>
            <div className="flex-grow block zigzag-base zigzag-bg-primary relative" />
          </div>
        ) : null}

        <div className="flex items-center justify-between">
          <Link
            href={courseHref}
            className={cn(
              'group inline-flex items-center gap-3',
              'text-primary-600 dark:text-primary-400',
              'hover:text-accent-600 dark:hover:text-accent-400',
              'transition-colors duration-200',
            )}
          >
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span className="text-lg font-semibold group-hover:underline">
              Back to Course Overview
            </span>
          </Link>

          {nextChapter ? (
            <Link
              href={nextChapter.href}
              className={cn(
                'group inline-flex items-center gap-3',
                'text-primary-600 dark:text-primary-400',
                'hover:text-accent-600 dark:hover:text-accent-400',
                'transition-colors duration-200',
              )}
            >
              <span className="text-lg font-semibold group-hover:underline">
                {nextChapter.title}
              </span>
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ChapterNavFooter
