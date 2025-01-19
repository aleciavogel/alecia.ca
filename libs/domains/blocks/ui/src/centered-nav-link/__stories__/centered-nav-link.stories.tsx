import type { Meta, StoryObj } from '@storybook/react'

import { CenteredNavLink } from '..'

const meta: Meta<typeof CenteredNavLink> = {
  title: 'Features/Blocks/UI/Centered Nav Link',
  component: CenteredNavLink,
  argTypes: {},
  args: {
    href: '#',
    title: 'About Alecia',
    description: 'Learn more about me and my career journey',
  },
  render: (args) => (
    <div className="grid grid-cols-1 gap-8 max-w-screen-sm">
      <CenteredNavLink {...args} />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof CenteredNavLink>

export const Default: Story = {
  args: {},
}
