import type { Meta, StoryObj } from '@storybook/react'

import { WavyDescriptiveText } from '..'

const meta: Meta<typeof WavyDescriptiveText> = {
  title: 'Vectors/Text/Wavy Descriptive Text',
  component: WavyDescriptiveText,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof WavyDescriptiveText>

export const Default: Story = {
  render: () => (
    <div className="w-full mx-auto text-primary-400">
      <WavyDescriptiveText className="w-full" />
    </div>
  ),
}
