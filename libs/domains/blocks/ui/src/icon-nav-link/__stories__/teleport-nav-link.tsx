import type { Meta, StoryObj } from '@storybook/react'

import { TeleportNavLink } from '..'

const meta: Meta<typeof TeleportNavLink> = {
  title: 'Modules/Icon Nav/Teleport Nav Link',
  component: TeleportNavLink,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['rocket', 'flask', 'code', 'chain'],
      description: 'The icon to display next to the title',
    },
    label: {
      control: { type: 'text' },
      description: 'The title of the link',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'The description of the link',
    },
    slug: {
      control: { type: 'text' },
      description: 'The URL to link to',
    },
  },
  render: ({ icon, ...args }) => {
    return (
      <div className="space-x-4">
        <TeleportNavLink {...args} />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<typeof TeleportNavLink>

export const Default: Story = {
  args: {
    icon: 'code',
    label: 'Advanced Projects',
    subtitle: 'Dive into building real world apps and learn as you go.',
    slug: '#',
  },
}
