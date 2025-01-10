import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'

import { TeleportAnimation } from '@/components/vectors/icons'
import { type AnimationDirection } from '@/components/vectors/icons/teleport-animation'

const meta: Meta<typeof TeleportAnimation> = {
  title: 'Vectors/Icons/Animated Teleport Icon',
  component: TeleportAnimation,
  argTypes: {
    animationDirection: {
      control: { type: 'radio' },
      options: ['forward', 'backward', 'none'],
    },
  },
}

export default meta

type Story = StoryObj<typeof TeleportAnimation>

export const Default: Story = {
  render: (args) => (
    <div className="max-w-10 mx-auto">
      <TeleportAnimation {...args} className="w-full" />
    </div>
  ),
}

export const HoverInteraction: Story = {
  render: (args) => {
    const [currentDir, setCurrentDir] = useState<AnimationDirection>('none')

    const handleMouseEnter = (): void => {
      setCurrentDir('forward')
    }

    const handleMouseLeave = (): void => {
      setCurrentDir('backward')
    }

    return (
      <div className="w-full flex justify-center">
        <div
          className="inline-block p-[20px] border border-gray-300 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <TeleportAnimation {...args} animationDirection={currentDir} />
        </div>
      </div>
    )
  },
}
