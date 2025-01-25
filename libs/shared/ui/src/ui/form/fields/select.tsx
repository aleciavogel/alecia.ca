import { type ReactElement } from 'react'
import type { Control, FieldValues, Path } from 'react-hook-form'

import { cn } from '@alecia/util/styles'

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot as Select,
  SelectTrigger,
  SelectValue,
} from '../../select'
import { FormControl, FormDescription, FormLabel, FormMessage } from '..'
import { FormField } from '../field'
import { FormItem } from '../item'

interface SelectOption {
  label: string
  value: string
}

interface SelectInputProps<T extends FieldValues> {
  name: Path<T>
  className?: string
  options: SelectOption[]
  id?: string
  label?: string
  placeholder?: string
  helperText?: string
  control?: Control<T>
}

const SelectField = <T extends FieldValues>({
  name,
  className,
  id,
  options,
  label,
  placeholder,
  helperText,
  control,
}: SelectInputProps<T>): ReactElement => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}

          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger
                className={cn(
                  'border-gray-300 dark:border-primary-800 focus:border-primary dark:focus:border-primary-300',
                  fieldState.error && 'border-red-600 dark:border-red-300',
                )}
              >
                <SelectValue placeholder={placeholder ?? ''} />
              </SelectTrigger>
            </FormControl>

            <SelectContent id={id}>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={[name, 'select', option.value].join('-')} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {helperText ? <FormDescription>{helperText}</FormDescription> : null}

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default SelectField
