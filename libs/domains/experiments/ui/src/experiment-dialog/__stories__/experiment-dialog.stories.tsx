import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@alecia/ui-kit'
import { getPlaceholderImage } from '@alecia/util'

import { ExperimentDialog } from '../experiment-dialog'

const meta: Meta<typeof ExperimentDialog> = {
  title: 'Features/Experiments/Experiment Dialog',
  component: ExperimentDialog,
  argTypes: {
    body: {
      control: {
        type: 'object',
      },
    },
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
    defaultOpen: {
      control: { type: 'boolean' },
    },
  },
  args: {
    defaultOpen: true,
    body: [
      {
        _key: '4',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: '3',
            _type: 'span',
            text: 'The future of web development is rapidly evolving, with modern frameworks and libraries making it easier than ever to create dynamic and responsive applications.',
          },
        ],
      },
    ],
  },
  render: (args) => (
    <ExperimentDialog {...args}>
      <Button>Click me uwu</Button>
    </ExperimentDialog>
  ),
}

export default meta

type Story = StoryObj<typeof ExperimentDialog>

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
