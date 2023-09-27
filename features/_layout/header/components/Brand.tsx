import { type FC } from 'react'
import Link from 'next/link'

import Logo from '@/features/_layout/header/components/Logo'

interface Props {
  hover: boolean
}

const SiteLogo: FC<Props> = ({ hover }) => {
  if (hover) {
    return (
      <Link id="site-brand" href="/" title="Home">
        <Logo />
      </Link>
    )
  }

  return (
    <div className="pointer-events-none text-current">
      <Logo />
    </div>
  )
}

export default SiteLogo
