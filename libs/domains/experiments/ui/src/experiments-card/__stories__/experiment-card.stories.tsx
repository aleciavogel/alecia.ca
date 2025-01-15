import type { Meta, StoryObj } from '@storybook/react'

import { getPlaceholderImage } from '@alecia/util'

import { ExperimentCard } from '../experiments-card'

const meta: Meta<typeof ExperimentCard> = {
  title: 'Features/Experiments/UI/Experiment Card',
  component: ExperimentCard,
  argTypes: {
    tags: {
      control: {
        type: 'object',
      },
    },
    imageSrc: {
      control: {
        type: 'text',
      },
    },
    imageAlt: {
      control: {
        type: 'text',
      },
    },
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
    repoUrl: {
      control: {
        type: 'text',
      },
    },
    slug: {
      control: {
        type: 'text',
      },
    },
  },
  render: (args) => (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      <ExperimentCard {...args} />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof ExperimentCard>

export const Default: Story = {
  args: {
    tags: [
      {
        _id: '1',
        label: 'React.js',
        slug: '/tag-1',
        _type: 'experiment.tag',
        _createdAt: '',
        _updatedAt: '',
        _rev: '',
        icon: null,
      },
      {
        _id: '2',
        label: 'AI',
        slug: '/tag-2',
        _type: 'experiment.tag',
        _createdAt: '',
        _updatedAt: '',
        _rev: '',
        icon: null,
      },
    ],
    repoUrl: 'https://github.com/aleciavogel',
    imageSrc: getPlaceholderImage(300, 300),
    imageAlt: 'Random image',
    title: 'Experiment title',
    subtitle: 'Experiment subtitle',
    slug: '/experiment',
  },
}

export const LongTitle: Story = {
  args: {
    tags: [
      {
        _id: '1',
        label: 'React.js',
        slug: '/tag-1',
        _type: 'experiment.tag',
        _createdAt: '',
        _updatedAt: '',
        _rev: '',
        icon: null,
      },
      {
        _id: '2',
        label: 'AI',
        slug: '/tag-2',
        _type: 'experiment.tag',
        _createdAt: '',
        _updatedAt: '',
        _rev: '',
        icon: null,
      },
    ],
    repoUrl: 'https://github.com/aleciavogel',
    imageSrc: getPlaceholderImage(300, 300),
    imageAlt: 'Random image',
    title: 'Exceptionally Long Experiment Title That Goes On More Than Two Lines',
    subtitle: 'Experiment subtitle',
    slug: '/experiment',
  },
}
