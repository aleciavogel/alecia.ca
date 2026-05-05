import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarFallback, AvatarImage } from '..'

const meta: Meta<typeof Avatar> = {
  title: 'UI Kit/Avatar',
  component: Avatar,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Base: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/aleciavogel.png" />
      <AvatarFallback>AV</AvatarFallback>
    </Avatar>
  ),
  args: {},
}
