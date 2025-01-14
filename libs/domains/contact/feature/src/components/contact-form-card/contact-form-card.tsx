import * as React from 'react'

import { Card, CardDescription, CardHeader, CardTitle } from '@alecia/ui-kit'

import { ContactForm } from '../contact-form'

export const ContactFormCard = () => (
  <Card className="w-full shadow-lg dark:bg-gray-900 border-primary-600">
    <CardHeader>
      <CardTitle className="text-primary-600 dark:text-primary-400 text-3xl">
        Shoot Me A Message
      </CardTitle>
      <CardDescription>I&apos;ll try to get back to you as soon as I can.</CardDescription>
    </CardHeader>
    <ContactForm />
  </Card>
)
