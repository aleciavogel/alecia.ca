import type { Meta, StoryObj } from '@storybook/react'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '..'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
}
