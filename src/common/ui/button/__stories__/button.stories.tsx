import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '..'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
      description: 'Text to appear inside of the button',
    },
  },
  render: (args) => (
    <div className="space-x-4">
      <Button {...args} size="lg" />
      <Button {...args} size="default" />
      <Button {...args} size="sm" />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button Text',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Button Text',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outline',
    children: 'Button Text',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button Text',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button Text',
  },
}
