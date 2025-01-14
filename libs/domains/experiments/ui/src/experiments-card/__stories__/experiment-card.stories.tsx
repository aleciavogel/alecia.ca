import type { Meta, StoryObj } from '@storybook/react'

import { ExperimentCard } from '../experiments-card'

const meta: Meta<typeof ExperimentCard> = {
  title: 'Features/Experiments/UI/Experiment Card',
  component: ExperimentCard,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof ExperimentCard>

export const Default: Story = {
  args: {},
}
