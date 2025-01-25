'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@alecia/util/styles'

import { InterceptedModalPortal } from './intercepted-modal-portal'

export const InterceptedModalContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  // To build out with React Spring
  // 1. Show nothing
  // 2. Animate background in
  // 3. Fade in the content

  // Upon pressing any sort of close button:
  // 1. Start a timeout
  // 2. Fade out the content
  // 3. Animate background out
  // 4. Proceed with router.back() or whatever

  return (
    <InterceptedModalPortal forceMount>
      <RemoveScroll>
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            'fixed inset-0',
            'p-6',
            'z-50',
            'bg-black',
            'overflow-auto',
            'focus:outline-none',
            className,
          )}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </RemoveScroll>
    </InterceptedModalPortal>
  )
})
InterceptedModalContent.displayName = 'InterceptedModalContent'
