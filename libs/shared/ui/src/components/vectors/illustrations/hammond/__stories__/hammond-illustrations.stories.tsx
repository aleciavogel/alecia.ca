import type { Meta, StoryObj } from '@storybook/react'

import {
  AleciaCouchIllustration,
  AleciaLayingIllustration,
  HammondScienceIllustration,
  HammondSleepingIllustration,
  SadieHammondCookiesIllustration,
} from '../..'

const meta: Meta<typeof HammondScienceIllustration> = {
  title: 'Vectors/Illustrations/Hammond',
  component: HammondScienceIllustration,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof HammondScienceIllustration>

export const AleciaCouch: Story = {
  render: (args) => (
    <div className="max-w-[500px] mx-auto">
      <AleciaCouchIllustration {...args} className="w-full" />
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

export const HammondSleeping: Story = {
  render: (args) => (
    <div className="max-w-[450px] mx-auto">
      <HammondSleepingIllustration {...args} className="w-full" />
    </div>
  ),
}

export const HammondScience: Story = {
  render: (args) => (
    <div className="max-w-[300px] mx-auto">
      <HammondScienceIllustration {...args} className="w-full" />
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
