import type { Meta, StoryObj } from '@storybook/react'

import { WavyText } from '..'

const meta: Meta<typeof WavyText> = {
  title: 'Features/Site Layout/Wavy Text',
  component: WavyText,
  argTypes: {
    text: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof WavyText>

export const Default: Story = {}
