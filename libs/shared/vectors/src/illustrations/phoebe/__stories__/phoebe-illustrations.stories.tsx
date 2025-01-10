import type { Meta, StoryObj } from '@storybook/react'

import {
  AleciaCouchIllustration,
  AleciaSitIllustration,
  PhoebeLaptopIllustration,
  PhoebeSleepingIllustration,
  PhoebeYarnIllustration,
} from '../..'

const meta: Meta<typeof PhoebeLaptopIllustration> = {
  title: 'Vectors/Illustrations/Phoebe',
  component: PhoebeLaptopIllustration,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof PhoebeLaptopIllustration>

export const AleciaCouch: Story = {
  render: (args) => (
    <div className="max-w-[500px] mx-auto">
      <AleciaCouchIllustration {...args} className="w-full" />
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

export const PhoebeLaptop: Story = {
  render: (args) => (
    <div className="max-w-[450px] mx-auto">
      <PhoebeLaptopIllustration {...args} className="w-full" />
    </div>
  ),
}

export const PhoebeSleeping: Story = {
  render: (args) => (
    <div className="max-w-[450px] mx-auto">
      <PhoebeSleepingIllustration {...args} className="w-full" />
    </div>
  ),
}

export const PhoebeYarn: Story = {
  render: (args) => (
    <div className="max-w-[450px] mx-auto">
      <PhoebeYarnIllustration {...args} className="w-full" />
    </div>
  ),
}
