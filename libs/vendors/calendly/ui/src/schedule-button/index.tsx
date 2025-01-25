'use client'

import { useCallback, useEffect, useState } from 'react'
import { PopupModal } from 'react-calendly'

import { CALENDLY_URL, CalendlySchedules } from '@alecia/calendly-constants'
import CalendlyIcon from '@alecia/graphics/icons/calendly'
import Button from '@alecia/ui-kit/ui/button'

interface CalendlyScheduleButtonProps {
  label?: string
  calendar?: CalendlySchedules
  showDetails?: boolean
}

const CalendlyScheduleButton = ({
  calendar = CalendlySchedules.VirtualCoffee,
  label = 'Chat with me',
  showDetails = false,
}: CalendlyScheduleButtonProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Button onClick={toggleModal} variant="default" size="lg">
        <CalendlyIcon />
        <span>{label}</span>
      </Button>
      <PopupModal
        url={`${CALENDLY_URL}/${calendar}`}
        onModalClose={toggleModal}
        pageSettings={{
          hideEventTypeDetails: !showDetails,
        }}
        open={isOpen}
        rootElement={document?.getElementById('root') as HTMLElement}
      />
    </>
  )
}

export default CalendlyScheduleButton
