import type { TutorialStackItem, Tutorial } from '@/features/tutorials/types'
import { TutorialTech as Tech, TutorialLevel } from '@/features/tutorials/types'

export const TOPICS: Record<Tech, TutorialStackItem> = {
  [Tech.PHOENIX]: {
    name: 'Phoenix',
    description: 'A productive web framework that does not compromise speed and maintainability.',
    docsHref: 'https://hexdocs.pm/phoenix/overview.html',
    type: 'fullstack',
    image: require('@/img/tutorials/phoenix.png'),
  },
  [Tech.ELIXIR]: {
    name: 'Elixir',
    description:
      'A dynamic, functional language designed for building scalable and maintainable applications.',
    docsHref: 'https://elixir-lang.org/getting-started/introduction.html',
    type: 'backend',
    image: require('@/img/tutorials/elixir.png'),
  },
  [Tech.TAILWIND]: {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom designs.',
    docsHref: 'https://tailwindcss.com/docs',
    type: 'frontend',
    image: require('@/img/tutorials/tailwind.png'),
  },
  [Tech.REACT]: {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    docsHref: 'https://reactjs.org/docs/getting-started.html',
    type: 'frontend',
    image: require('@/img/tutorials/react.svg'),
  },
  [Tech.NEXTJS]: {
    name: 'Next.js',
    description: 'The React Framework for Production.',
    docsHref: 'https://nextjs.org/docs/getting-started',
    type: 'frontend',
    image: require('@/img/tutorials/nextjs.png'),
  },
  [Tech.TYPESCRIPT]: {
    name: 'TypeScript',
    description: 'A superset of JavaScript that compiles to clean JavaScript output.',
    docsHref: 'https://www.typescriptlang.org/docs/',
    type: 'frontend',
    image: require('@/img/tutorials/typescript.svg'),
  },
  [Tech.JAVASCRIPT]: {
    name: 'JavaScript',
    description:
      'A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.',
    docsHref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    type: 'frontend',
    image: require('@/img/tutorials/javascript.png'),
  },
  [Tech.HTML]: {
    name: 'HTML',
    description:
      'The standard markup language for documents designed to be displayed in a web browser.',
    docsHref: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    type: 'frontend',
    image: require('@/img/tutorials/html5.png'),
  },
  [Tech.CSS]: {
    name: 'CSS',
    description:
      'A stylesheet language used to describe the presentation of a document written in HTML or XML.',
    docsHref: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    type: 'frontend',
    image: require('@/img/tutorials/css3.png'),
  },
  [Tech.RUBY]: {
    name: 'Ruby',
    description:
      'A dynamic, open source programming language with a focus on simplicity and productivity.',
    docsHref: 'https://www.ruby-lang.org/en/documentation/',
    type: 'backend',
    image: require('@/img/tutorials/ruby.svg'),
  },
  [Tech.RAILS]: {
    name: 'Rails',
    description:
      'A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern.',
    docsHref: 'https://guides.rubyonrails.org/',
    type: 'fullstack',
    image: require('@/img/tutorials/rails.png'),
  },
  [Tech.POSTGRESQL]: {
    name: 'PostgreSQL',
    description: 'A powerful, open source object-relational database system.',
    docsHref: 'https://www.postgresql.org/docs/',
    type: 'backend',
    image: require('@/img/tutorials/postgres.png'),
  },
  [Tech.MYSQL]: {
    name: 'MySQL',
    description: "The world's most popular open source database.",
    docsHref: 'https://dev.mysql.com/doc/',
    type: 'backend',
    image: require('@/img/tutorials/mysql.png'),
  },
  [Tech.PHP]: {
    name: 'PHP',
    description:
      'A popular general-purpose scripting language that is especially suited to web development.',
    docsHref: 'https://www.php.net/docs.php',
    type: 'backend',
    image: require('@/img/tutorials/php.png'),
  },
  [Tech.PYTHON]: {
    name: 'Python',
    description: 'An interpreted, high-level and general-purpose programming language.',
    docsHref: 'https://docs.python.org/3/',
    type: 'backend',
    image: require('@/img/tutorials/python.svg'),
  },
}

export const TUTORIAL_LIST: Record<string, Tutorial> = {
  'supabase-jackbox-clone': {
    title: 'Build A JackBox.TV Clone with Supabase & NextJS',
    description: 'This is a test course',
    stack: [TOPICS[Tech.PHOENIX], TOPICS[Tech.ELIXIR], TOPICS[Tech.TAILWIND], TOPICS[Tech.REACT]],
    level: TutorialLevel.beginner,
    timeToRead: '10 min',
  },
}
