import type { Meta, StoryObj } from '@storybook/react'

import { uniq } from '@alecia/util'

import { Typography, typographyVariantMap } from '..'

const meta: Meta<typeof Typography> = {
  title: 'UI/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(typographyVariantMap),
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    weight: {
      control: 'select',
      options: ['default', 'light', 'normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'accent', 'muted'],
    },
    align: {
      control: 'select',
      options: ['default', 'left', 'center', 'right'],
    },
    as: {
      control: 'select',
      options: uniq(Object.values(typographyVariantMap)),
    },
  },
}

export default meta

type Story = StoryObj<typeof Typography>

export const DefaultText: Story = {
  args: {
    children: 'Default text.',
  },
}

export const Headings: Story = {
  render: (args) => (
    <>
      <Typography variant="h1" {...args}>
        Heading 1
      </Typography>
      <Typography variant="h2" {...args}>
        Heading 2
      </Typography>
      <Typography variant="h3" {...args}>
        Heading 3
      </Typography>
      <Typography variant="h4" {...args}>
        Heading 4
      </Typography>
      <Typography variant="h5" {...args}>
        Heading 5
      </Typography>
      <Typography variant="h6" {...args}>
        Heading 6
      </Typography>
    </>
  ),
}

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
}

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
}

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
}

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
}

export const Heading5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5',
  },
}

export const Heading6: Story = {
  args: {
    variant: 'h6',
    children: 'Heading 6',
  },
}

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph with default styling.',
  },
}

export const Blockquote: Story = {
  args: {
    variant: 'blockquote',
    children: 'This is a blockquote with some interesting text.',
    as: 'blockquote',
  },
}

export const Lead: Story = {
  args: {
    variant: 'lead',
    children: 'This is a lead paragraph, often used for introductions.',
  },
}

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'This is large text.',
  },
}

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'This is small text.',
  },
}

export const Strike: Story = {
  args: {
    variant: 'strike',
    children: 'This is strike-through text.',
  },
}

export const Muted: Story = {
  args: {
    color: 'muted',
    children: 'This is muted text, often used for less important information.',
  },
}

export const CustomSize: Story = {
  args: {
    variant: 'p',
    size: 'xl',
    children: 'This is a paragraph with custom size (xl).',
  },
}

export const CustomWeight: Story = {
  args: {
    variant: 'p',
    weight: 'bold',
    children: 'This is a paragraph with custom weight (bold).',
  },
}

export const CustomAlignment: Story = {
  args: {
    variant: 'p',
    align: 'center',
    children: 'This is a centered paragraph.',
  },
}

export const CombinedCustomization: Story = {
  args: {
    variant: 'h3',
    size: '4xl',
    weight: 'light',
    align: 'right',
    children: 'Custom Heading',
  },
}

export const AsComponent: Story = {
  args: {
    as: 'span',
    variant: 'h1',
    children: 'This is a span styled as a heading.',
  },
}

export const UnorderedList: Story = {
  args: {
    variant: 'ul',
    children: (
      <>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </>
    ),
  },
}

export const OrderedList: Story = {
  args: {
    variant: 'ol',
    children: (
      <>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </>
    ),
  },
}
