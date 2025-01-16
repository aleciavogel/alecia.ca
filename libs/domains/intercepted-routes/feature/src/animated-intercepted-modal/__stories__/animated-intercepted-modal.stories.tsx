import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { InterceptedModal, InterceptedModalTrigger } from '@alecia/intercepted-ui'
import { Button } from '@alecia/ui-kit'

import { AnimatedInterceptedModal } from '..'

const meta: Meta<typeof AnimatedInterceptedModal> = {
  title: 'Features/Intercepted Routes/Animated Modal',
  component: AnimatedInterceptedModal,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <InterceptedModal open={open} onOpenChange={setOpen}>
        <InterceptedModalTrigger>
          <Button>Open</Button>
        </InterceptedModalTrigger>
        <AnimatedInterceptedModal {...args} open={open}>
          <span>Hello, it is I</span>
        </AnimatedInterceptedModal>
      </InterceptedModal>
    )
  },
}
