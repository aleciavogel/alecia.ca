import type { Meta, StoryObj } from '@storybook/react'

import {
  AleciaCouchIllustration,
  AleciaIdeaIllustration,
  AleciaLayingIllustration,
  AleciaSitIllustration,
  AleciaWaveIllustration,
  SadieAteMyWebsiteIllustration,
} from '../..'

const meta: Meta<typeof AleciaCouchIllustration> = {
  title: 'Vectors/Illustrations/Alecia',
  component: AleciaCouchIllustration,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof AleciaCouchIllustration>

export const AleciaCouch: Story = {
  render: (args) => (
    <div className="max-w-[500px] mx-auto">
      <AleciaCouchIllustration {...args} className="w-full" />
    </div>
  ),
}

export const AleciaIdea: Story = {
  render: (args) => (
    <div className="max-w-[300px] mx-auto">
      <AleciaIdeaIllustration {...args} className="w-full" />
    </div>
  ),
}

export const AleciaSit: Story = {
  render: (args) => (
    <div className="max-w-[300px] mx-auto">
      <AleciaSitIllustration {...args} className="w-full" />
    </div>
  ),
}

export const AleciaLaying: Story = {
  render: (args) => (
    <div className="max-w-[450px] mx-auto">
      <AleciaLayingIllustration {...args} className="w-full" />
    </div>
  ),
}

export const AleciaWave: Story = {
  render: (args) => (
    <div className="max-w-[250px] mx-auto">
      <AleciaWaveIllustration {...args} className="w-full" />
    </div>
  ),
}

export const SadieAteMyWebsite: Story = {
  render: (args) => (
    <div className="max-w-[450px] mx-auto">
      <SadieAteMyWebsiteIllustration {...args} className="w-full" />
    </div>
  ),
}
