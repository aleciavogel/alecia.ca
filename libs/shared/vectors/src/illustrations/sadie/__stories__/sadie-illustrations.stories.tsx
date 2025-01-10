import type { Meta, StoryObj } from '@storybook/react'

import {
  AleciaCouchIllustration,
  AleciaIdeaIllustration,
  SadieAteMyWebsiteIllustration,
  SadieHammondCookiesIllustration,
} from '../..'

const meta: Meta<typeof SadieAteMyWebsiteIllustration> = {
  title: 'Vectors/Illustrations/Sadie',
  component: SadieAteMyWebsiteIllustration,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof SadieAteMyWebsiteIllustration>

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

export const SadieAteMyWebsite: Story = {
  render: (args) => (
    <div className="max-w-[450px] mx-auto">
      <SadieAteMyWebsiteIllustration {...args} className="w-full" />
    </div>
  ),
}

export const SadieHammondCookies: Story = {
  render: (args) => (
    <div className="max-w-[450px] mx-auto">
      <SadieHammondCookiesIllustration {...args} className="w-full" />
    </div>
  ),
}
