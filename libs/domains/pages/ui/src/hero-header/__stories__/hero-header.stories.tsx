import type { Meta, StoryObj } from '@storybook/react'

import { getPlaceholderImage } from '@alecia/util'

import { HeroHeader } from '..'

const meta: Meta<typeof HeroHeader> = {
  title: 'Features/Pages/Hero Header',
  component: HeroHeader,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    subtitle: {
      control: {
        type: 'text',
      },
    },
    tag: {
      control: {
        type: 'object',
      },
    },
    coverImage: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    title: 'UX Lessons from the Hawaiian Missile Crisis',
    subtitle:
      'In 2018, a government employee clicked the wrong button and gave the people of Hawaii the scare of a lifetime.',
    tag: {
      text: 'UX & Design',
      href: '#',
    },
    coverImage: getPlaceholderImage(1920, 1080),
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
