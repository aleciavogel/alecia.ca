import type { Meta, StoryObj } from '@storybook/react'

import { PopQuiz } from '../pop-quiz'

const meta: Meta<typeof PopQuiz> = {
  title: 'Features/Quizzes/UI/Pop Quiz',
  component: PopQuiz,
  argTypes: {},
  args: {
    question:
      'What is the best way to do this complicated thing that I just introduced to you in this chapter?',
    answers: [
      'Answer one is a few words and two sentences. This is the second sentence.',
      'Answer two is a few words and one sentence only.',
      'Answer three is a few words and one sentence only.',
      'Answer four is a few words and two sentences. This is the second sentence.',
    ],
    correctAnswer: 1,
    nextSectionTitle: 'Next Section',
    nextSectionDescription: 'Learn about the history of France',
    href: '#',
  },
}

export default meta

type Story = StoryObj<typeof PopQuiz>

export const Default: Story = {}

export const Correct: Story = {
  args: {
    previousGuess: 1,
  },
}

export const Incorrect: Story = {
  args: {
    previousGuess: 0,
  },
}
