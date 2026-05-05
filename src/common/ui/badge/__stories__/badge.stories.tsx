import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from '..'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline', 'white'],
      control: { type: 'select' },
    },
    className: { control: { type: 'text' } },
  },
  args: {
    children: 'Web Development',
    variant: 'default',
  },
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {}

export const Secondary: Story = {
  args: { variant: 'secondary' },
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const White: Story = {
  args: { variant: 'white' },
  render: (args) => (
    <div className="px-6 py-6 bg-gray-900">
      <Badge {...args} />
    </div>
  ),
}
