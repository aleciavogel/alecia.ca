import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@alecia/ui-kit'

import {
  InterceptedModal,
  InterceptedModalClose,
  InterceptedModalContent,
  InterceptedModalHeader,
  InterceptedModalTrigger,
} from '..'

/**
 * A window overlaid on either the primary window or another dialog window,
 * rendering the content underneath inert.
 */
const meta = {
  title: 'Features/Intercepted Routes/Intercepted Modal',
  component: InterceptedModal,
  tags: ['autodocs'],
  argTypes: {},
  render: (args) => (
    <InterceptedModal {...args}>
      <InterceptedModalTrigger>Open</InterceptedModalTrigger>
      <InterceptedModalContent>
        <div className="text-white">Hello, it is I, the content</div>
        <InterceptedModalClose>
          <Button className="rounded bg-primary px-4 py-2">Close</Button>
        </InterceptedModalClose>
      </InterceptedModalContent>
    </InterceptedModal>
  ),
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InterceptedModal>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the dialog.
 */
export const Default: Story = {}

export const WithHeader: Story = {
  render: (args) => (
    <InterceptedModal {...args}>
      <InterceptedModalTrigger>Open</InterceptedModalTrigger>
      <InterceptedModalContent className="pt-24 lg:pt-32">
        <InterceptedModalHeader />
        <div className="text-white">Hello, it is I, the content</div>
        <InterceptedModalClose>
          <Button className="rounded bg-primary px-4 py-2">Close</Button>
        </InterceptedModalClose>
      </InterceptedModalContent>
    </InterceptedModal>
  ),
}
