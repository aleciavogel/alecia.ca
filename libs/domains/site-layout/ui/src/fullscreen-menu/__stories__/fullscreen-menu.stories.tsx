import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { FullScreenMenuType } from '@alecia/settings-types'
import Button from '@alecia/ui-kit/ui/button'
import { MenuSheetRoot, MenuSheetTrigger } from '@alecia/ui-kit/ui/menu-sheet'

import FullscreenMenu from '..'

const DEFAULT_MENU_ITEMS = [
  {
    _key: '1',
    _type: 'link.internal',
    label: 'Home',
    slug: '/link-1',
    icon: 'faRocket',
  },
  {
    _key: '2',
    _type: 'link.internal',
    label: 'About',
    slug: '/link-2',
    icon: 'faRocket',
  },
  {
    _key: '3',
    _type: 'link.internal',
    label: 'Blog',
    slug: '/link-3',
    icon: 'faRocket',
  },
] as NonNullable<FullScreenMenuType>

const meta: Meta<typeof FullscreenMenu> = {
  title: 'Features/Site Layout/Fullscreen Menu',
  component: FullscreenMenu,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
    animationDuration: {
      control: {
        type: 'number',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    fullScreenMenu: {
      control: {
        type: 'text',
      },
    },
    social: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    fullScreenMenu: DEFAULT_MENU_ITEMS,
    social: [
      {
        _key: '1',
        _type: 'link.social',
        label: 'GitHub',
        url: 'https://github.com',
      },
      {
        _key: '2',
        _type: 'link.social',
        label: 'Facebook',
        url: 'https://facebook.com',
      },
      {
        _key: '3',
        _type: 'link.social',
        label: 'Twitter',
        url: 'https://twitter.com',
      },
    ],
  },
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <MenuSheetRoot open={open} onOpenChange={setOpen}>
        <MenuSheetTrigger>
          <Button>Open</Button>
        </MenuSheetTrigger>
        <FullscreenMenu {...args} open={open} />
      </MenuSheetRoot>
    )
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongMenu: Story = {
  args: {
    fullScreenMenu: [
      ...DEFAULT_MENU_ITEMS,
      ...DEFAULT_MENU_ITEMS,
      ...DEFAULT_MENU_ITEMS,
      ...DEFAULT_MENU_ITEMS,
    ].map((item, index) => ({
      ...item,
      _key: index.toString(),
    })),
  },
}
