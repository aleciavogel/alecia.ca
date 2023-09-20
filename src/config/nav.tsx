import {
  faRss,
  faComputerClassic,
  faPaintBrush,
  faCode,
  faComments,
  faLightbulb,
} from '@fortawesome/pro-solid-svg-icons'

import AboutDropdownContent from '@/components/layout/header/AboutDropdown'
import type { MainNavItem, SidebarNavItem } from '@/types/nav'

export const MAIN_NAV: MainNavItem[] = [
  {
    title: 'Home',
    href: '/',
    srOnly: true,
  },
  {
    title: 'About',
    href: '/about',
    DropdownContent: AboutDropdownContent,
    items: [
      {
        title: 'About Me',
        href: '/about/me',
        description: 'Learn more about me and my background.',
      },
      {
        title: 'Projects (12 📂)',
        href: '/about/projects',
        description: "See what I've been working on for the past few years.",
      },
      {
        title: 'Resumé ↗',
        href: '/about/cv',
        description: 'Download a copy of my CV',
      },
    ],
  },
  {
    title: 'Blog',
    href: '/blog',
    items: [
      {
        title: 'All Posts',
        href: '/blog',
        description: 'See all of my blog posts in one convenient place.',
        icon: faRss,
      },
      {
        title: 'UX & Design',
        href: '/blog/ux-design',
        description: 'The art and science of building beautiful sites.',
        icon: faPaintBrush,
      },
      {
        title: 'Tech History',
        href: '/blog/tech-history',
        description: 'Discover where we came from and where we are going.',
        icon: faComputerClassic,
      },
      {
        title: 'Coding',
        href: '/blog/coding',
        description: 'Quick tips and tricks for building better software.',
        icon: faCode,
      },
      {
        title: 'Career Advice',
        href: '/blog/career-advice',
        description: 'Learn how to navigate the tech industry.',
        icon: faLightbulb,
      },
      {
        title: 'Hiring Devs',
        href: '/blog/hiring-devs',
        description: 'Thoughts on recruiting in the tech sector.',
        icon: faComments,
      },
    ],
  },
  {
    title: 'Tutorials',
    href: '/tutorials',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export const SIDEBAR_NAV: SidebarNavItem[] = []
