import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@alecia/ui-kit'

import { MenuSheet, MenuSheetTrigger } from '../../'
import { FullscreenMenu } from '..'

const meta: Meta<typeof FullscreenMenu> = {
  title: 'Features/Site Layout/Fullscreen Menu',
  component: FullscreenMenu,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <MenuSheet open={open} onOpenChange={setOpen}>
        <MenuSheetTrigger>
          <Button>Open</Button>
        </MenuSheetTrigger>
        <FullscreenMenu {...args} open={open} />
      </MenuSheet>
    )
  },
}
