import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faBriefcase,
  faCode,
  faComputerClassic,
  faLightbulb,
  faPaintBrush,
} from '@fortawesome/pro-solid-svg-icons'

interface BlogCategory {
  title: string
  description: string
  icon?: IconProp
}

export const BLOG_CATEGORIES: Record<string, BlogCategory> = {
  'career-advice': {
    title: 'Career Advice',
    description: 'Become a stand-out candidate and get the job you want.',
    icon: faLightbulb,
  },
  coding: {
    title: 'Coding',
    description: 'Real-world tips and tricks plus emerging tools for developers.',
    icon: faCode,
  },
  'tech-history': {
    title: 'Tech History',
    description: "Unearth tech's past to predict its future.",
    icon: faComputerClassic,
  },
  'hiring-devs': {
    title: 'Hiring Devs',
    description: 'Attract better talent and build a stronger team.',
    icon: faBriefcase,
  },
  'ux-design': {
    title: 'UX & Design',
    description: 'Marrying form and function in digital product development.',
    icon: faPaintBrush,
  },
}
