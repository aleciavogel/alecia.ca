'use client'

import type { FC } from 'react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { faSpinner } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'

import { useSendContactForm } from '@alecia/contact-data-access'
import { ContactFormSchema, type ContactFormValues } from '@alecia/contact-types'
import {
  Button,
  CardContent,
  CardFooter,
  Form,
  SelectField,
  TextAreaField,
  TextField,
} from '@alecia/ui-kit'
import { cn } from '@alecia/util'

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Employment Opportunity',
  'Freelance Project',
  'Speaking Engagement',
  'Issue with the Website',
  'Just wanted to say hi!',
  'Something else...',
]

export const ContactForm: FC = () => {
  const { mutate: submitForm, isPending } = useSendContactForm()
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      subject: undefined,
      message: undefined,
    },
  })

  const handleSubmit = (data: ContactFormValues): void => {
    console.log('data submitted', data)

    submitForm(data, {
      onSuccess: () => {
        form.reset()
      },
      onError: (error) => {
        console.error('Error submitting contact form', error)
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} autoComplete="on">
        <CardContent className="grid grid-cols-2 gap-5">
          <TextField
            control={form.control}
            name="firstName"
            label="First Name"
            autoComplete="first-name"
            className="col-span-1"
          />
          <TextField
            control={form.control}
            name="lastName"
            label="Last Name"
            autoComplete="family-name"
            className="col-span-1"
          />
          <TextField
            control={form.control}
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            className="col-span-2"
          />
          <TextField
            control={form.control}
            name="phone"
            label="Phone Number"
            autoComplete="tel"
            type="tel"
            className="col-span-2"
          />
          <SelectField
            control={form.control}
            name="subject"
            label="Subject"
            className="col-span-2"
            options={SUBJECT_OPTIONS.map((subject) => ({
              label: subject,
              value: subject,
            }))}
          />
          <TextAreaField
            control={form.control}
            name="message"
            label="Message"
            className="col-span-2"
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            type="submit"
            className={cn('text-white w-full', 'disabled:opacity-70')}
            size="lg"
            disabled={form.formState.isSubmitting || isPending}
          >
            {form.formState.isSubmitting || isPending ? (
              <>
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                <span>Submitting...</span>{' '}
              </>
            ) : (
              <span>Submit</span>
            )}
          </Button>
        </CardFooter>
      </form>
    </Form>
  )
}
