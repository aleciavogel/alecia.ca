import { faRocket } from '@fortawesome/pro-solid-svg-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { BlogCard } from '../blog-card'

const meta: Meta<typeof BlogCard> = {
  title: 'Features/Blog/UI/Blog Card',
  component: BlogCard,
  argTypes: {},
  args: {
    tags: [
      {
        text: 'New Thing',
        icon: faRocket,
      },
      {
        text: 'React',
        href: '#',
      },
    ],
    authorName: 'Alecia Vogel',
    previewText:
      "This is a preview of the blog post. It's a great preview, trust me. By the way, it should cut off if I have enough text to do that, like just off to the right here.",
  },
  render: (args) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <BlogCard {...args} previewText={undefined} />
      <BlogCard {...args} title="Changes on dark mode" changeOnDarkMode />
      <BlogCard
        {...args}
        // previewText={undefined}
        title="Here is a much longer title that goes on two lines"
      />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof BlogCard>

export const Default: Story = {
  args: {},
}
