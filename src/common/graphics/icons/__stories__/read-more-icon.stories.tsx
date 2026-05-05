import type { Meta, StoryObj } from '@storybook/react'

import ReadMoreArrowIcon from '../read-more'

const meta: Meta<typeof ReadMoreArrowIcon> = {
  title: 'Vectors/Icons/Read More Icon',
  component: ReadMoreArrowIcon,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof ReadMoreArrowIcon>

export const Default: Story = {
  render: (args) => (
    <div className="max-w-10 mx-auto">
      <ReadMoreArrowIcon {...args} className="w-full" />
    </div>
  ),
}
