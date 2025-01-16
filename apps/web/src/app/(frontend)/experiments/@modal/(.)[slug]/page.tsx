'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { AnimatedInterceptedModal } from '@alecia/intercepted-routes'
import { InterceptedModal } from '@alecia/intercepted-ui'

export default function ExperimentModalPage({ params }: { params: { slug: string } }) {
  const ANIMATION_DURATION = 300
  const router = useRouter()
  const [open, setOpen] = useState(true)

  const handleOpenChange = async (open: boolean) => {
    if (!open) {
      setOpen(false)
      setTimeout(() => router.back(), ANIMATION_DURATION)
    }
  }

  return (
    <InterceptedModal open={open} onOpenChange={handleOpenChange}>
      <AnimatedInterceptedModal open={open} animationDuration={ANIMATION_DURATION}>
        <h2 className="text-3xl font-bold mb-4">Experiment {params.slug}</h2>
        <p className="text-gray-700">This is an intercepted modal route using GSAP.</p>
      </AnimatedInterceptedModal>
    </InterceptedModal>
  )
}
