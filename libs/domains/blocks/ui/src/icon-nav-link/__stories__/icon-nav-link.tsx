import { faChain, faCode, faFlask, faRocketLaunch } from '@fortawesome/pro-solid-svg-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { IconNavLink } from '../icon-nav-link'

const meta: Meta<typeof IconNavLink> = {
  title: 'Modules/Icon Nav/Icon Nav Link',
  component: IconNavLink,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['rocket', 'flask', 'code', 'chain'],
      description: 'The icon to display next to the title',
    },
    pageTitle: {
      control: { type: 'text' },
      description: 'The title of the link',
    },
    description: {
      control: { type: 'text' },
      description: 'The description of the link',
    },
    href: {
      control: { type: 'text' },
      description: 'The URL to link to',
    },
  },
  render: ({ icon, ...args }) => {
    let iconToUse = faRocketLaunch

    if (icon === 'flask') {
      iconToUse = faFlask
    } else if (icon === 'code') {
      iconToUse = faCode
    } else if (icon === 'chain') {
      iconToUse = faChain
    }

    return (
      <div className="space-x-4">
        <IconNavLink {...args} icon={iconToUse} />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<typeof IconNavLink>

export const Default: Story = {
  args: {
    icon: 'code',
    pageTitle: 'Advanced Projects',
    description: 'Dive into building real world apps and learn as you go.',
    href: '#',
  },
}
