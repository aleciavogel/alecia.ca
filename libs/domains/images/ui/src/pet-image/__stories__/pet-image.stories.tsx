import type { Meta, StoryObj } from '@storybook/react'

import { PetImage } from '..'

/**
 * Used in the PetGallery block and is a hover card that displays a pet's name, image,
 * and some additional information.
 */
const meta: Meta<typeof PetImage> = {
  title: 'Features/Images/Pet Image',
  component: PetImage,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    imageAlt: {
      control: {
        type: 'text',
      },
    },
    imageSrc: {
      control: {
        type: 'text',
      },
    },
    additionalInfo: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    name: 'Sadie',
    imageAlt: 'A cute dog named Sasha',
  },
  render: (args) => (
    <div className="max-w-[300px]">
      <PetImage {...args} />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInfo: Story = {
  args: {
    additionalInfo: ['Norwegian Elkhound', 'Once stole a cracker from a baby.'],
  },
}
