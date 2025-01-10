import type { Meta, StoryObj } from '@storybook/react'

import { AleciaLogo } from '..'

const meta: Meta<typeof AleciaLogo> = {
  title: 'Vectors/Logos/Alecia Vogel',
  component: AleciaLogo,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof AleciaLogo>

export const Default: Story = {
  render: () => (
    <div className="max-w-[100px] mx-auto">
      <AleciaLogo className="w-full" />
    </div>
  ),
}
