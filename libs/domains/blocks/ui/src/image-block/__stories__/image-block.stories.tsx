import type { Meta, StoryObj } from '@storybook/react'

import { getPlaceholderImage } from '@alecia/util'

import { ImageBlock, ImageBlockLayout, ImageBlockSide } from '..'

/**
 * An image block is a component that displays an image alongside a block of text.
 * The text can wrap around the image or be displayed in a column layout.
 */
const meta: Meta<typeof ImageBlock> = {
  title: 'Features/Blocks/Image Block',
  component: ImageBlock,
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: {
        type: 'text',
      },
    },
    imageAlt: {
      control: {
        type: 'text',
      },
    },
    body: {
      control: {
        type: 'object',
      },
    },
    layout: {
      control: {
        type: 'select',
        options: ['float', 'column'],
      },
    },
    side: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    reverseMargin: {
      control: {
        type: 'boolean',
      },
    },
    caption: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    imageSrc: getPlaceholderImage(800, 600),
    imageAlt: 'Placeholder image',
    reverseMargin: false,
    caption:
      'This is a placeholder image block. It provides an introduction to the topic being discussed and sets the tone for the content that follows.',
    body: [
      {
        _key: '1',
        _type: 'block',
        children: [
          {
            _key: '2',
            _type: 'span',
            marks: [],
            text: 'This is the first paragraph of a placeholder image block. It provides an introduction to the topic being discussed and sets the tone for the content that follows.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '3',
        _type: 'block',
        children: [
          {
            _key: '4',
            _type: 'span',
            marks: [],
            text: 'The second paragraph goes into more detail. It expands upon the ideas introduced in the first paragraph and begins to provide examples or evidence to support the discussion. You might mention specific points or describe concepts in greater depth here. This helps to create a more comprehensive and engaging experience for the reader.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5',
        _type: 'block',
        children: [
          {
            _key: '6',
            _type: 'span',
            marks: [],
            text: 'The third paragraph might be a bit shorter, providing a quick aside or interesting fact that complements the main discussion. For instance, you could mention a related statistic or anecdote that illustrates your point.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '7',
        _type: 'block',
        children: [
          {
            _key: '8',
            _type: 'span',
            marks: [],
            text: 'Finally, the closing paragraph wraps up the discussion. It summarizes the key points and provides a clear conclusion. This is where you might encourage the reader to think more deeply about the topic or take a specific action based on the information provided.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '9',
        _type: 'block',
        children: [
          {
            _key: '10',
            _type: 'span',
            marks: [],
            text: 'If you want, you can add even more content to ensure the text flows nicely around the image. This allows you to fully test how the layout behaves with both short and long blocks of text.',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
  },
}

export default meta

type Story = StoryObj<typeof meta>

/** Default image block */
export const Default: Story = {}

/** Image block with a floating layout on the left side */
export const LeftFloatLayout: Story = {
  args: {
    layout: 'float' as ImageBlockLayout,
    side: 'left' as ImageBlockSide,
  },
}

/** Image block with a floating layout on the right side */
export const RightFloatLayout: Story = {
  args: {
    layout: 'float' as ImageBlockLayout,
    side: 'right' as ImageBlockSide,
  },
}

/** Image block with a column layout */
export const LeftColumnLayout: Story = {
  args: {
    side: 'left' as ImageBlockSide,
    layout: 'column' as ImageBlockLayout,
  },
}

/** Image block with a column layout on the right side */
export const RightColumnLayout: Story = {
  args: {
    layout: 'column' as ImageBlockLayout,
    side: 'right' as ImageBlockSide,
  },
}

/** Image block with a column layout and reverse margin */
export const ColumnWithReverseMargin: Story = {
  args: {
    side: 'left' as ImageBlockSide,
    layout: 'column' as ImageBlockLayout,
    reverseMargin: true,
  },
  render: (args) => {
    return (
      <div className="pt-24">
        <ImageBlock {...args} />
      </div>
    )
  },
}
