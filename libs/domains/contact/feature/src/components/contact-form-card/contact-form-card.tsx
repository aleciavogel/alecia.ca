'use client'
import { useState } from 'react'

import { SubmissionSuccess } from '@alecia/contact-ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@alecia/ui-kit'

import { ContactForm } from '../contact-form'

export const ContactFormCard = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSuccess = () => {
    setShowSuccess(true)
  }

  return (
    <Card className="w-full shadow-lg dark:bg-gray-900 border-primary-600 max-w-screen-sm max-lg:mx-auto">
      <CardHeader className="max-md:text-center">
        <CardTitle className="text-primary-600 dark:text-primary-400 text-2xl md:text-3xl">
          Shoot Me A Message
        </CardTitle>
        <CardDescription>I&apos;ll try to get back to you as soon as I can.</CardDescription>
      </CardHeader>
      {showSuccess ? (
        <CardContent>
          <SubmissionSuccess />
        </CardContent>
      ) : (
        <ContactForm onSuccess={handleSuccess} />
      )}
    </Card>
  )
}
