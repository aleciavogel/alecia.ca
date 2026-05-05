import type { Meta, StoryObj } from '@storybook/react'

import { getPlaceholderImage } from '@alecia/util/styles'

import { CourseCard } from '../index'

const meta: Meta<typeof CourseCard> = {
  title: 'Features/Courses/UI/Course Card',
  component: CourseCard,
  argTypes: {},
  args: {
    tags: [
      {
        text: 'React',
        href: '#',
      },
    ],
    description:
      "This is a preview of the course. It's a great preview, trust me. By the way, it should cut off if I have enough text to do that, like just off to the right here.",
  },
  render: (args) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <CourseCard {...args} description={undefined} />
      <CourseCard {...args} title="Changes on dark mode" changeOnDarkMode />
      <CourseCard {...args} title="Here is a much longer title that goes on two lines" />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof CourseCard>

export const Default: Story = {
  args: {},
}

export const WithThumbnail: Story = {
  args: {
    image: {
      src: getPlaceholderImage(1200, 628),
      alt: '',
    },
  },
}
