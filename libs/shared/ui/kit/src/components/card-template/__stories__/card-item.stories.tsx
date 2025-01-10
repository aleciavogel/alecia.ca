import { faRocket } from '@fortawesome/pro-solid-svg-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { ThumbnailDimensions } from '@alecia/constants'
import { getPlaceholderImage } from '@alecia/util'

import { CardItem } from '..'

const meta: Meta<typeof CardItem> = {
  title: 'Modules/Cards/Card Item',
  component: CardItem,
  argTypes: {},
  args: {
    children: 'This is a card with some text in it.',
    href: '#',
  },
  render: (args) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <CardItem
        {...args}
        image={{
          src: getPlaceholderImage(ThumbnailDimensions.Width, ThumbnailDimensions.Height),
          alt: '',
        }}
      >
        This is a card that has an image
      </CardItem>
      <CardItem
        {...args}
        changeOnDarkMode
        tags={[
          {
            text: 'New Thing',
            icon: faRocket,
          },
          {
            text: 'React',
            href: '#',
          },
        ]}
      >
        This is a card with no image, but it still displays a badge.
      </CardItem>
      <CardItem
        {...args}
        changeOnDarkMode
        tags={[
          {
            text: 'New Thing',
            icon: faRocket,
          },
          {
            text: 'React',
            href: '#',
          },
        ]}
        image={{
          src: getPlaceholderImage(ThumbnailDimensions.Width, ThumbnailDimensions.Height),
          alt: '',
        }}
      />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof CardItem>

export const Default: Story = {
  args: {},
}
