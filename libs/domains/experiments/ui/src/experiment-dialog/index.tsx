import { ReactNode } from 'react'
import { faArrowDownLeft } from '@fortawesome/pro-regular-svg-icons'
import { faArrowRightLong } from '@fortawesome/pro-solid-svg-icons/faArrowRightLong'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import Link from 'next/link'
import { PortableTextBlock, stegaClean } from 'next-sanity'

import { ExperimentsIndexQueryResult } from '@alecia/sanity-types/sanity.types'
import { DialogContent, DialogRoot as Dialog, DialogTrigger } from '@alecia/ui-kit/ui/dialog'
import Tag from '@alecia/ui-kit/ui/tag'
import { getPlaceholderImage } from '@alecia/util/images'
import { cn } from '@alecia/util/styles'

import ExperimentPortableText from '../experiment-portable-text'
import RepoLink from '../repo-link'

type SingleExperimentResult = NonNullable<ExperimentsIndexQueryResult['experiments']>[number]

interface ExperimentDialogProps extends SingleExperimentResult {
  defaultOpen?: boolean
  children: ReactNode
}

const ExperimentDialog = ({
  children,
  defaultOpen,
  tags,
  imageSrc,
  imageAlt,
  title,
  body,
  slug,
  repoUrl,
}: ExperimentDialogProps) => (
  <Dialog defaultOpen={defaultOpen}>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="p-0 max-w-[90%] md:max-w-screen-sm lg:max-w-screen-md overflow-hidden text-primary-800 shadow-flat shadow-flat-md shadow-red-600">
      <div className="grid md:grid-cols-2">
        <div className="max-md:hidden col-span-1 h-full relative">
          <img
            src={imageSrc && imageSrc.length ? imageSrc : getPlaceholderImage(300, 400)}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 px-5 left-0 z-[11] space-x-2">
            {tags?.map((tag) => (
              <Tag
                text={tag.label ?? 'Untitled tag'}
                href={tag.slug ?? '#'}
                key={`${imageSrc}-${tag._id}`}
              />
            ))}
          </div>
        </div>
        <div className="pt-20 px-8 pb-8 h-full">
          <div className="flex flex-col gap-4 justify-end h-full">
            <h3 className="font-serif transition-colors text-primary-900 ease-in duration-300 text-3xl">
              {title}
            </h3>
            <ExperimentPortableText value={body as PortableTextBlock[]} />
            <Link
              href={stegaClean(slug) ?? '#'}
              className={cn(
                'group/link space-x-2 relative text-primary-800 hover:text-accent-600 text-sm',
              )}
            >
              <span className="relative zigzag-btn font-semibold group-hover/link:zigzag-btn-hover">
                Go to Sandbox
              </span>

              <FontAwesomeIcon
                icon={faArrowRightLong}
                className={cn(
                  'transition-all duration-200 ease-in-out',
                  'transform translate-x-0',
                  'group-hover/link:translate-x-1',
                )}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Top Right Buttons */}

      <DialogPrimitive.Close className="absolute top-3 right-3 hover:text-accent-600 duration-300 ease-in-out transition-colors ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <FontAwesomeIcon icon={faArrowDownLeft} className="size-8" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>

      <RepoLink
        repoUrl={repoUrl}
        className="absolute z-[2] right-5 top-14 hover:text-accent-600 duration-300 ease-in-out transition-colors"
      />
    </DialogContent>
  </Dialog>
)

export default ExperimentDialog
