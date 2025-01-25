'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@alecia/util/styles'

const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

export default DialogTitle
