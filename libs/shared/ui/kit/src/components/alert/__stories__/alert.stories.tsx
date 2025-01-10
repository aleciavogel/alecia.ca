import type { Meta, StoryObj } from '@storybook/react'
import { AlertCircle, Terminal } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '..'

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => (
    <Alert>
      <Terminal className="w-5 h-5" />
      <AlertTitle>Head&apos;s up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  ),
}
