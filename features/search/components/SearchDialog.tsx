'use client'

import { type FC, useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/common/ui/command'
import { type PostSearchInfo } from '@/app/api/blog/posts/route'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartShopping,
  faEnvelope,
  faFile,
  faHome,
  faRocketLaunch,
  faTransporter,
} from '@fortawesome/pro-solid-svg-icons'
import { MAIN_NAV } from '@/features/_layout/header/constants'
import SearchTrigger from './SearchTrigger'

const SearchDialog: FC = () => {
  // Load posts from API
  const router = useRouter()
  const [posts, setPosts] = useState<PostSearchInfo[]>([])
  const [open, setOpen] = useState(false)
  const aboutLinks = MAIN_NAV.find((item) => item.title === 'About')
  const blogLinks = MAIN_NAV.find((item) => item.title === 'Blog')
  const playgroundLinks = MAIN_NAV.find((item) => item.title === 'Playground')
  const iconStyles = 'mr-2'

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  useEffect(() => {
    const getPosts = async (): Promise<void> => {
      const res = await fetch('/api/blog/posts')
      const posts = await res.json()
      setPosts(posts)
    }

    getPosts()
      .then(() => {
        console.log('Posts loaded')
      })
      .catch((err) => {
        console.error('Error occurred during post fetch', err)
      })
  }, [])

  return (
    <>
      <SearchTrigger
        hover={true}
        onClick={() => {
          setOpen(true)
        }}
      />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Whatcha lookin' for?" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              value="Home"
              onSelect={() => {
                runCommand(() => {
                  router.push('/')
                })
              }}
            >
              <FontAwesomeIcon icon={faHome} className={iconStyles} />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              value="Get In Touch"
              onSelect={() => {
                runCommand(() => {
                  router.push('/contact')
                })
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} className={iconStyles} />
              <span>Get In Touch</span>
            </CommandItem>
          </CommandGroup>

          {/* About */}
          <CommandGroup heading="About">
            {aboutLinks?.items?.map((item) => (
              <CommandItem
                key={item.href}
                value={item.title}
                onSelect={() => {
                  router.push(item.href ?? '')
                }}
              >
                <FontAwesomeIcon icon={item.icon ?? faFile} className={iconStyles} />
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          {/* Blog Categories */}
          <CommandGroup heading="Blog Categories">
            {blogLinks?.items?.map((category) => (
              <CommandItem
                key={category.href}
                value={category.title}
                onSelect={() => {
                  runCommand(() => {
                    router.push(category.href)
                  })
                }}
              >
                <FontAwesomeIcon icon={category.icon ?? faFile} className={iconStyles} />
                <span>{category.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          {/* Individual Blog Posts */}
          <CommandGroup heading="Blog Posts">
            {posts.map((post) => (
              <CommandItem
                key={post.slug}
                value={post.title}
                onSelect={() => {
                  runCommand(() => {
                    router.push('/blog/' + post.slug)
                  })
                }}
              >
                <FontAwesomeIcon icon={faFile} className={iconStyles} />
                <span>{post.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          {/* Learn To Code */}
          <CommandGroup heading="Learn To Code">
            <CommandItem
              value="Happy Little Brackets"
              onSelect={() => {
                router.push('/learn-to-code/happy-little-brackets')
              }}
            >
              <FontAwesomeIcon icon={faFile} className={iconStyles} />
              <span>Happy Little Brackets</span>
            </CommandItem>
            <CommandItem
              value="Coding 101"
              onSelect={() => {
                router.push('/learn-to-code/coding-101')
              }}
            >
              <FontAwesomeIcon icon={faRocketLaunch} className={iconStyles} />
              <span>Coding 101</span>
            </CommandItem>
            <CommandItem
              value="Advanced Projects"
              onSelect={() => {
                router.push('/learn-to-code/advanced-projects')
              }}
            >
              <FontAwesomeIcon icon={faTransporter} className={iconStyles} />
              <span>Advanced Projects</span>
            </CommandItem>
            <CommandItem
              value="Shop"
              onSelect={() => {
                router.push('/learn-to-code/advanced-projects')
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} className={iconStyles} />
              <span>Shop</span>
            </CommandItem>
          </CommandGroup>

          {/* Playground */}
          <CommandGroup heading="Playground">
            {playgroundLinks?.items?.map((item) => (
              <CommandItem
                key={item.href}
                value={item.title}
                onSelect={() => {
                  router.push(item.href ?? '')
                }}
              >
                <FontAwesomeIcon icon={item.icon ?? faFile} className={iconStyles} />
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default SearchDialog
