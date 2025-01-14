import { type ReactElement } from 'react'
import type { Control, FieldValues, Path } from 'react-hook-form'

import { Switch } from '../../switch'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '..'

interface SwitchInputProps<T extends FieldValues> {
  name: Path<T>
  label: string
  id?: string
  helperText?: string
  control?: Control<T>
}

export const SwitchField = <T extends FieldValues>({
  control,
  name,
  id,
  label,
  helperText,
}: SwitchInputProps<T>): ReactElement => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <div className="space-y-0.5">
            <FormLabel>{label}</FormLabel>
            {helperText ? <FormDescription>{helperText}</FormDescription> : null}
          </div>

          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              id={id ?? `${name}-switch-input`}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
