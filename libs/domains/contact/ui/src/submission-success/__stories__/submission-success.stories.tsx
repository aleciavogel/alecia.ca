import type { Meta, StoryObj } from '@storybook/react'

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardRoot as Card,
  CardTitle,
} from '@alecia/ui-kit/ui/card'

import SubmissionSuccess from '..'

const meta: Meta<typeof SubmissionSuccess> = {
  title: 'Features/Contact/Submission Success',
  component: SubmissionSuccess,
  argTypes: {},
  render: () => (
    <div className="max-w-screen-sm">
      <Card className="w-full shadow-lg dark:bg-gray-900 border-primary-600">
        <CardHeader>
          <CardTitle className="text-primary-600 dark:text-primary-400 text-3xl">
            Shoot Me A Message
          </CardTitle>
          <CardDescription>I&apos;ll try to get back to you as soon as I can.</CardDescription>
        </CardHeader>
        <CardContent>
          <SubmissionSuccess />
        </CardContent>
      </Card>
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof SubmissionSuccess>

export const Default: Story = {}
