'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@alecia/util'

export const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-gray-200',
      className,
    )}
    {...props}
  />
))
AvatarFallback.displayName = 'AvatarFallback'
