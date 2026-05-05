import type { Meta, StoryObj } from '@storybook/react'

import { RadioCardItem, RadioCards } from '..'

/**
 * A set of checkable buttons—known as radio buttons—where no more than one of
 * the buttons can be checked at a time.
 */
const meta: Meta<typeof RadioCards> = {
  title: 'UI/Radio Cards',
  component: RadioCards,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    defaultValue: 'comfortable',
    className: 'max-w-screen-sm',
  },
  render: (args) => (
    <RadioCards {...args}>
      <RadioCardItem value="0">
        Answer one is a few words and two sentences. This is the second sentence.
      </RadioCardItem>
      <RadioCardItem value="1">Answer two is a few words and one sentence only.</RadioCardItem>
      <RadioCardItem value="2">Answer three is a few words and one sentence only.</RadioCardItem>
      <RadioCardItem value="3">
        Answer four is a few words and two sentences. This is the second sentence.
      </RadioCardItem>
    </RadioCards>
  ),
}

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the radio group.
 */
export const Default: Story = {}
