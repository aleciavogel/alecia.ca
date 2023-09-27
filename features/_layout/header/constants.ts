import {
  faRss,
  faComputerClassic,
  faPaintBrush,
  faCode,
  faBriefcase,
  faLightbulb,
  faChain,
  faFlask,
} from '@fortawesome/pro-solid-svg-icons'

import AboutDropdownContent from '@/features/_layout/header/components/AboutDropdown'
import type { MainNavItem, SidebarNavItem } from '@/features/_layout/header/types'
import LearnToCodeDropdownContent from './components/LearnToCodeDropdown'
import PlaygroundDropdown from './components/PlaygroundDropdown'

export const MAIN_NAV: MainNavItem[] = [
  {
    title: 'Home',
    href: '/',
    srOnly: true,
  },
  {
    title: 'About',
    DropdownContent: {
      Left: AboutDropdownContent,
    },
    items: [
      {
        title: 'About Alecia',
        href: '/about/alecia',
        description: 'Learn more about me and my career journey.',
      },
      {
        title: 'Projects (12 📂)',
        href: '/about/projects',
        description: 'A showcase of my past and present work.',
      },
      {
        title: 'Resumé',
        href: '/about/cv',
        description: 'Download a personalized copy of my CV.',
      },
    ],
  },
  {
    title: 'Blog',
    items: [
      {
        title: 'All Posts',
        href: '/blog',
        description: "Every article I've written, all in one place.",
        icon: faRss,
      },
      {
        title: 'UX & Design',
        href: '/blog/ux-design',
        description: 'Marrying form and function in digital product development.',
        icon: faPaintBrush,
      },
      {
        title: 'Tech History',
        href: '/blog/tech-history',
        description: "Unearth tech's past to predict its future.",
        icon: faComputerClassic,
      },
      {
        title: 'Coding',
        href: '/blog/coding',
        description: 'Real-world tips and tricks plus emerging tools for developers.',
        icon: faCode,
      },
      {
        title: 'Career Advice',
        href: '/blog/career-advice',
        description: 'Become a stand-out candidate and get the job you want.',
        icon: faLightbulb,
      },
      {
        title: 'Hiring Devs',
        href: '/blog/hiring-devs',
        description: 'Attract better talent and build a stronger team.',
        icon: faBriefcase,
      },
    ],
  },
  {
    title: 'Learn To Code',
    DropdownContent: LearnToCodeDropdownContent,
  },
  {
    title: 'Playground',
    href: '/playground',
    DropdownContent: {
      Left: PlaygroundDropdown,
    },
    items: [
      {
        title: 'Experiments',
        href: '/playground/experiments',
        icon: faFlask,
        description: 'My personal sandbox for trying out new ideas.',
      },
      {
        title: 'Resources',
        href: '/playground/resources',
        icon: faChain,
        description: 'A collection of useful links for developers.',
      },
    ],
  },
  {
    title: 'Get In Touch',
    href: '/contact',
  },
]

export const SIDEBAR_NAV: SidebarNavItem[] = []
