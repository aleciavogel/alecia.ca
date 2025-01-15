'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@alecia/util'

import { InterceptedModalPortal } from './intercepted-modal-portal'

export const InterceptedModalContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  // To build out with GSAP
  // 1. Show nothing
  // 2. Animate background in
  // 3. Fade in the content

  // Upon pressing any sort of close button:
  // 1. Start a timeout
  // 2. Fade out the content
  // 3. Animate background out
  // 4. Proceed with router.back() or whatever

  return (
    <InterceptedModalPortal>
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed inset-0 z-50 bg-black p-6 overflow-auto focus:outline-none data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut',
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </InterceptedModalPortal>
  )
})
InterceptedModalContent.displayName = 'InterceptedModalContent'
