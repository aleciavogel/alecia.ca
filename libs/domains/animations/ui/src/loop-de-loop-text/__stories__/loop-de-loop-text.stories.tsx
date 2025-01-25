import type { Meta, StoryObj } from '@storybook/react'

import { LoopDeLoopText } from '..'

const meta: Meta<typeof LoopDeLoopText> = {
  title: 'Features/Site Layout/Loop De Loop Text',
  component: LoopDeLoopText,
  argTypes: {
    text: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof LoopDeLoopText>

export const Default: Story = {}
