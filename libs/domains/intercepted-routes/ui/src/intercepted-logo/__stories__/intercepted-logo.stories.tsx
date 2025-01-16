import type { Meta, StoryObj } from '@storybook/react'

import { InterceptedLogo } from '..'

/**
 * The logo that appears in the header of the intercepted route modals.
 */
const meta = {
  title: 'Features/Intercepted Routes/Intercepted Logo',
  component: InterceptedLogo,
  tags: ['autodocs'],
  argTypes: {
    showText: {
      control: { type: 'boolean' },
    },
    topText: {
      control: { type: 'text' },
    },
  },
  render: (args) => <InterceptedLogo {...args} />,
} satisfies Meta<typeof InterceptedLogo>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the dialog.
 */
export const Default: Story = {}

/**
 * The dialog with the name displayed.
 */
export const WithName: Story = {
  args: {
    showText: true,
  },
}
