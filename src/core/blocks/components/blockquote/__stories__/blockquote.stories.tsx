import type { Meta, StoryObj } from '@storybook/react'

import { Blockquote } from '..'

const meta: Meta<typeof Blockquote> = {
  title: 'Features/Blocks/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  argTypes: {
    author: {
      control: {
        type: 'text',
      },
    },
    quote: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    quote: 'There is no invention without great imagination.',
    author: 'Ada Lovelace',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
