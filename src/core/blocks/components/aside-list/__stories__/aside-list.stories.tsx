import type { Meta, StoryObj } from '@storybook/react'

import { AsideList } from '..'

const meta: Meta<typeof AsideList> = {
  title: 'Features/Blocks/Aside List',
  component: AsideList,
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
    },
    listItems: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    heading: 'Tech Stack',
    listItems: ['React', 'TypeScript', 'TailwindCSS', 'Jest', 'React Testing Library'],
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
