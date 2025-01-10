'use client'

import type { ComponentPropsWithoutRef, Ref } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util'

export const Card = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref: Ref<HTMLDivElement>) => (
    <div
      ref={ref}
      className={cn('rounded-xl border bg-white text-body shadow', className)}
      {...props}
    />
  ),
)
Card.displayName = 'Card'
