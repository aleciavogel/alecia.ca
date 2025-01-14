import type { Meta, StoryObj } from '@storybook/react'

import { getPlaceholderImage } from '@alecia/util'

import { ProjectCard } from '../project-card'

const meta: Meta<typeof ProjectCard> = {
  title: 'Features/Projects/UI/Project Card',
  component: ProjectCard,
  argTypes: {},
  args: {
    url: '@/',
    tags: [
      {
        text: 'Web Development',
        href: '#',
      },
    ],
    image: {
      src: getPlaceholderImage(1200, 500),
      alt: '',
    },
  },
  render: (args) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCard {...args} title="Changes on dark mode" changeOnDarkMode />
      <ProjectCard {...args} title="Calgary Telus Convention Centre Online Annual Report" />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof ProjectCard>

export const Default: Story = {
  args: {},
}
