import { type FC, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  to: string
  srOnly?: boolean
  children?: React.ReactNode | string
}

const StaticNavLink: FC<NavLinkProps> = ({ to, children, srOnly = false }) => {
  const LINK_CLASSES =
    'text-white-rgba hover:text-white text-base pointer-events-auto relative transition-color duration-300 ease-in-out nextDiv:text-transparent'
  const pathname = usePathname()
  const isActive = useMemo(() => {
    const samePath = pathname === to
    const isAboutPage = pathname === '/' && to === '/'
    const isSubPath = to !== '/' && pathname.includes(to)
    return samePath || isAboutPage || isSubPath
  }, [pathname, to])

  return (
    <li
      className={`${srOnly ? 'sr-only ' : ''}grow-0 pointer-events-auto font-sans-serif relative`}
    >
      <Link className={`${LINK_CLASSES} ${isActive ? 'active' : ''}`.trim()} href={to}>
        {children}
      </Link>
      <div className="absolute top-full left-0 [font-size:10px] w-full text-center">&#11042;</div>
    </li>
  )
}

export default StaticNavLink
