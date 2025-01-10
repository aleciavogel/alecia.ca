import type { Meta, StoryObj } from '@storybook/react'

import { HappyLittleBracketsLogo } from '..'

const meta: Meta<typeof HappyLittleBracketsLogo> = {
  title: 'Vectors/Logos/Happy Little Brackets Logo',
  component: HappyLittleBracketsLogo,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof HappyLittleBracketsLogo>

export const Default: Story = {
  render: () => (
    <div className="max-w-[200px] mx-auto">
      <HappyLittleBracketsLogo className="w-full" />
    </div>
  ),
}

export const WaterSlide: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-sky-300 text-blue-950">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
      <div className="p-6 bg-blue-950 text-sky-300">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
    </div>
  ),
}

export const Bumblebee: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-yellow-500 text-gray-900">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
      <div className="p-6 bg-gray-800 text-yellow-400">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
    </div>
  ),
}

export const BerryNice: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-pink-400 text-pink-900">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
      <div className="p-6 bg-pink-800 text-pink-300">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
    </div>
  ),
}

export const Racecar: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-red-400 text-gray-800">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
      <div className="p-6 bg-gray-800 text-red-400">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
    </div>
  ),
}

export const BackyardSandcastles: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-red-200 text-emerald-700">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
      <div className="p-6 bg-emerald-800 text-red-300">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
    </div>
  ),
}

export const GrapeJuice: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-purple-700 text-gray-900">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
      <div className="p-6 bg-gray-800 text-purple-600">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
    </div>
  ),
}

export const EatYourGreens: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-green-300 text-emerald-950">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
      <div className="p-6 bg-emerald-950 text-green-400">
        <HappyLittleBracketsLogo className="max-w-[190px] mx-auto" />
      </div>
    </div>
  ),
}
