import type { FC } from 'react'
import Link from 'next/link'
import { VisualEditing } from 'next-sanity'

import { Routes } from '@alecia/constants/routes'

const VisualEditingControls: FC = () => (
  <>
    <VisualEditing />

    <Link
      className="action fixed bottom-0 right-4 rounded-b-none text-xs opacity-50 hover:opacity-100"
      href={Routes.API.Sanity.DisableDraft}
      prefetch={false}
    >
      Disable draft mode
    </Link>
  </>
)

export default VisualEditingControls
