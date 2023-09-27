'use client'

import { type FC, useState, useCallback } from 'react'

import { CommandDialog, CommandEmpty, CommandInput, CommandList } from '@/common/ui/command'
import {
  StaticPagesCommandGroup,
  BlogPostsCommandGroup,
  TutorialPagesCommandGroup,
} from './partials'
import SearchGroup from './search-group'
import SearchTrigger from './search-trigger'

const SearchDialog: FC = () => {
  const [open, setOpen] = useState(false)

  const runCommand = useCallback(
    (command: () => unknown) => {
      setOpen(false)
      command()
    },
    [setOpen],
  )

  return (
    <>
      <SearchTrigger
        onClick={() => {
          setOpen(true)
        }}
      />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Whatcha lookin' for?" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <StaticPagesCommandGroup runCommand={runCommand} />

          <SearchGroup heading="About" runCommand={runCommand} />
          <SearchGroup heading="Blog Categories" groupName="Blog" runCommand={runCommand} />

          <BlogPostsCommandGroup runCommand={runCommand} />

          <TutorialPagesCommandGroup runCommand={runCommand} />

          <SearchGroup heading="Playground" runCommand={runCommand} />
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default SearchDialog
