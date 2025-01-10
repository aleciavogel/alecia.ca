import { type ReactElement } from 'react'
import type { Control, FieldValues, Path } from 'react-hook-form'

import { cn } from '@alecia/util'

import { Checkbox } from '../../checkbox'
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '..'

const FORM_DESCRIPTION_STYLES = 'rounded-md border p-4 shadow'

interface CheckboxInputProps<T extends FieldValues> {
  name: Path<T>
  label: string
  id?: string
  helperText?: string
  control?: Control<T>
}

export const CheckboxField = <T extends FieldValues>({
  control,
  name,
  helperText,
  id,
  label,
}: CheckboxInputProps<T>): ReactElement => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div
            className={cn(
              'flex flex-row items-start space-x-3 space-y-0 ',
              helperText ? FORM_DESCRIPTION_STYLES : '',
            )}
          >
            <FormControl>
              <Checkbox id={id} checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>

            <div className="space-y-1 leading-none">
              <FormLabel>{label}</FormLabel>
              <FormDescription>{helperText}</FormDescription>
            </div>
          </div>
        </FormItem>
      )}
    />
  )
}
