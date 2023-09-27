import { type FC } from 'react'
import Link from 'next/link'

import { AleciaLogo } from '@/common/vectors'

interface Props {
  hover: boolean
}

const SiteLogo: FC<Props> = ({ hover }) => {
  if (hover) {
    return (
      <Link id="site-brand" href="/" title="Home">
        <AleciaLogo />
      </Link>
    )
  }

  return (
    <div className="pointer-events-none text-current">
      <AleciaLogo />
    </div>
  )
}

export default SiteLogo
