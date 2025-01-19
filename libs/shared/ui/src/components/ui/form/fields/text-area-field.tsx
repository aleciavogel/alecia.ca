import type { FocusEvent } from 'react'
import type { Control, FieldValues, Path } from 'react-hook-form'

import { cn } from '@alecia/util'

import { TextArea } from '../../text-area'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '..'

interface TextInputProps<T extends FieldValues> {
  name: Path<T>
  className?: string
  id?: string
  label?: string
  placeholder?: string
  helperText?: string
  control?: Control<T>
  autoComplete?: string
  isReadOnly?: boolean
  isDisabled?: boolean
  inputClassName?: string
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void
}

export const TextAreaField = <T extends FieldValues>({
  control,
  name,
  id,
  label,
  placeholder,
  helperText,
  isReadOnly = false,
  isDisabled = false,
  autoComplete,
  inputClassName,
  onBlur,
  className,
}: TextInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}

          <FormControl>
            <TextArea
              {...field}
              id={id ?? `${name}-input`}
              placeholder={placeholder}
              readOnly={isReadOnly}
              disabled={isDisabled}
              autoComplete={autoComplete}
              className={cn(
                'border-gray-300 dark:border-primary-800 focus:border-primary dark:focus:border-primary-300',
                inputClassName,
                fieldState.error && 'border-red-600 dark:border-red-300',
              )}
              onBlur={onBlur}
            />
          </FormControl>

          {helperText ? <FormDescription>{helperText}</FormDescription> : null}

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
