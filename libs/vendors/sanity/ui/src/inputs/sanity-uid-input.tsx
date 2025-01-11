'use client'

import { type FC, useState } from 'react'
import { CheckboxIcon, ClipboardIcon } from '@radix-ui/react-icons'
import { Box, Button, Flex, Text, TextInput } from '@sanity/ui'
import type { KeyedSegment, StringInputProps } from 'sanity'

export const SanityUIDInput: FC<StringInputProps> = ({ elementProps, path }) => {
  const indexOfModule = path.indexOf('modules')
  const moduleKey = (path[indexOfModule + 1] as KeyedSegment | undefined)?._key
  const [checked, setChecked] = useState(false)

  return (
    <Flex gap={1} align="center">
      <Text muted>#</Text>

      <Box flex={1}>
        <TextInput {...elementProps} placeholder={moduleKey} radius={2} />
      </Box>

      <Button
        title="Click to copy"
        mode="ghost"
        icon={checked ? CheckboxIcon : ClipboardIcon}
        disabled={checked}
        onClick={() => {
          void navigator.clipboard.writeText(`#${elementProps.value ?? moduleKey ?? ''}`)

          setChecked(true)
          setTimeout(() => {
            setChecked(false)
          }, 1000)
        }}
      />
    </Flex>
  )
}
