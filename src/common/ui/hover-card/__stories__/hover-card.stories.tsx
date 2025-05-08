import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { getPlaceholderImage } from '@alecia/util/styles'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '..'

const meta: Meta<typeof HoverCard> = {
  title: 'UI/Hover Card',
  component: HoverCard,
  argTypes: {
    defaultOpen: {
      control: { type: 'boolean' },
    },
  },
  args: {},
  parameters: {
    docs: { canvas: { height: 600 } },
  },
}

export default meta

type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger>Hover over me</HoverCardTrigger>
      <HoverCardContent>
        <div className="text-sm p-6">
          Website Name is helpful when I&apos;m stuck for inspiration. Bonus, they have a great user
          interface too! Maybe some more details can go here, maybe not!
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithHorizontalImage: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger>Hover over me</HoverCardTrigger>
      <HoverCardContent>
        <div className="grid grid-cols-2">
          <div className="text-sm p-6">
            Website Name is helpful when I&apos;m stuck for inspiration. Bonus, they have a great
            user interface too! Maybe some more details can go here, maybe not!
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithStackedImage: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger>Hover over me</HoverCardTrigger>
      <HoverCardContent>
        <div className="grid grid-cols-1">
          <div className="text-sm p-6">
            Website Name is helpful when I&apos;m stuck for inspiration. Bonus, they have a great
            user interface too! Maybe some more details can go here, maybe not!
          </div>
          <div>
            <img
              src={getPlaceholderImage(400, 200)}
              alt="Placeholder"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
