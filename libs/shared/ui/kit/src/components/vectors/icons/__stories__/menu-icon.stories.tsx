import type { Meta, StoryObj } from '@storybook/react'

import { MenuIcon } from '@/components/vectors/icons'

const meta: Meta<typeof MenuIcon> = {
  title: 'Vectors/Icons/Menu Icon',
  component: MenuIcon,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof MenuIcon>

export const Default: Story = {
  render: (args) => (
    <div className="max-w-10 mx-auto">
      <MenuIcon {...args} className="w-full" />
    </div>
  ),
}
