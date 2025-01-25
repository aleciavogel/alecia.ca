import type { Meta, StoryObj } from '@storybook/react'

import { getPlaceholderImage } from '@alecia/util/styles'

import { ProjectCard } from '../index'

const meta: Meta<typeof ProjectCard> = {
  title: 'Features/Projects/Project Card',
  component: ProjectCard,
  argTypes: {},
  args: {
    slug: '#',
    tags: [
      {
        label: 'Web Development',
        slug: '#',
        _id: '',
        _type: 'project.tag',
        _createdAt: '',
        _updatedAt: '',
        _rev: '',
        icon: null,
      },
    ],
    imageSrc: getPlaceholderImage(1200, 500),
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

export const Default: Story = {}
