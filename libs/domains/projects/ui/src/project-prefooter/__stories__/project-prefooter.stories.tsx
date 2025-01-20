import type { Meta, StoryObj } from '@storybook/react'

import { getPlaceholderImage } from '@alecia/util'

import { ProjectPreFooter } from '..'

const meta: Meta<typeof ProjectPreFooter> = {
  title: 'Features/Projects/Project Pre Footer',
  component: ProjectPreFooter,
  argTypes: {
    relatedProjects: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    relatedProjects: [
      {
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
        _id: '1',
        _type: 'project',
        _createdAt: '',
        _updatedAt: '',
        _rev: '',
        mainImage: null,
      },
      {
        slug: '#',
        tags: [
          {
            label: 'React',
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
        _id: '2',
        _type: 'project',
        _createdAt: '',
        _updatedAt: '',
        _rev: '',
        mainImage: null,
      },
    ],
  },
  render: (args) => (
    <div className="pt-80">
      <ProjectPreFooter {...args} />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof ProjectPreFooter>

export const Default: Story = {}
