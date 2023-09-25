import { type FC } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface SidebarLinkProps {
  title: string
  part: string
  current?: boolean
}

const SidebarLink: FC<SidebarLinkProps> = ({ title, part, current = false }) => {
  // const partNumber = part.split('/')[1].split('-')[0]
  return (
    <li>
      <Link
        href={`/learn-to-code/${part}`}
        className={cn(
          current ? 'text-primary-600 dark:text-primary-300' : 'text-gray-500 dark:text-gray-300',
          'flex items-center space-x-3',
          'text-sm',
        )}
      >
        <div
          className={cn(
            // 'bg-primary-600 dark:bg-primary-400',
            'border-2',
            current
              ? 'border-primary-600 dark:border-primary-300'
              : 'border-gray-400 dark:border-gray-300',
            'p-2 text-xs',
            'rounded-full h-2 w-2',
            'flex items-center justify-center text-center font-bold leading-0',
          )}
        >
          {/* {partNumber} */}
        </div>
        <span>{title}</span>
      </Link>
    </li>
  )
}

export default SidebarLink
