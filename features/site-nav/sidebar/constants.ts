import {
  faFolder,
  faPage,
  faRocketLaunch,
  faTransporter,
  faUser,
  faBriefcase,
  faComputerClassic,
  faPaintBrush,
  faCode,
  faRss,
  faLightbulb,
  faFlask,
  faChain,
} from '@fortawesome/pro-solid-svg-icons'
import type { SidebarLink } from './types'

export const SIDEBAR_NAV: SidebarLink[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    items: [
      {
        title: 'About Alecia',
        href: '/about/alecia',
        icon: faUser,
      },
      {
        title: 'Projects (12 📂)',
        href: '/about/projects',
        icon: faFolder,
      },
      {
        title: 'Resume',
        href: '/about/cv',
        icon: faPage,
      },
    ],
  },
  {
    title: 'Blog',
    items: [
      {
        title: 'All Posts',
        href: '/blog',
        icon: faRss,
      },
      {
        title: 'UX & Design',
        href: '/blog/ux-design',
        icon: faPaintBrush,
      },
      {
        title: 'Tech History',
        href: '/blog/tech-history',
        icon: faComputerClassic,
      },
      {
        title: 'Coding',
        href: '/blog/coding',
        icon: faCode,
      },
      {
        title: 'Career Advice',
        href: '/blog/career-advice',
        icon: faLightbulb,
      },
      {
        title: 'Hiring Devs',
        href: '/blog/hiring-devs',
        icon: faBriefcase,
      },
    ],
  },
  {
    title: 'Learn To Code',
    items: [
      {
        title: 'Happy Little Brackets',
        href: '/learn-to-code/happy-little-brackets',
        icon: faPage,
      },
      {
        title: 'Coding 101',
        href: '/learn-to-code/coding-101',
        icon: faRocketLaunch,
      },
      {
        title: 'Advanced Projects',
        href: '/learn-to-code/advanced-projects',
        icon: faTransporter,
      },
    ],
  },
  {
    title: 'Playground',
    items: [
      {
        title: 'Experiments',
        href: '/playground/experiments',
        icon: faFlask,
      },
      {
        title: 'Resources',
        href: '/playground/resources',
        icon: faChain,
      },
    ],
  },
  {
    title: 'Get In Touch',
    href: '/contact',
  },
]
