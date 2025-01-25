import classNames from 'classnames'
import { PortableTextBlock } from 'next-sanity'
import { Image } from 'next-sanity/image'

// TODO: Replace?
import BasicBlockContent from '@alecia/ui-kit/ui/portable-text/basic-block-content'

export enum ImageBlockLayout {
  Float = 'float',
  Column = 'column',
}

export enum ImageBlockSide {
  Left = 'left',
  Right = 'right',
}

interface ImageBlockProps {
  width?: number | null
  height?: number | null
  imageSrc: string
  imageAlt: string
  body?: PortableTextBlock[] | null
  layout?: ImageBlockLayout | null
  side?: ImageBlockSide | null
  reverseMargin?: boolean | null
  caption?: string | null
  imgBgColor?: string | null
  centeredText?: boolean | null
}

export const ImageBlock = ({
  width,
  height,
  imageSrc,
  imageAlt,
  body,
  caption = null,
  layout = ImageBlockLayout.Column,
  side = ImageBlockSide.Left,
  reverseMargin = false,
  imgBgColor,
  centeredText = false,
}: ImageBlockProps) => {
  const isLeft = side === ImageBlockSide.Left
  const isRight = side === ImageBlockSide.Right
  const isFloat = layout === ImageBlockLayout.Float
  const isColumn = layout === ImageBlockLayout.Column

  return (
    <div
      className={classNames({
        'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16': isColumn,
        'space-y-6': isFloat,
        'md:-mt-6': reverseMargin,
      })}
    >
      <div
        className={classNames('w-full', {
          'md:order-last': isRight && isColumn,
          'md:max-w-[40%] mb-4 md:mb-10': isFloat,
          'md:float-right md:ml-10 lg:ml-16': isRight && isFloat,
          'md:float-left md:mr-10 lg:mr-16': isLeft && isFloat,
          'md:pt-28': reverseMargin,
          'space-y-2': caption,
        })}
      >
        <div
          style={{
            background: imgBgColor ? imgBgColor : 'transparent',
          }}
          className="w-full"
        >
          <Image
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="w-full"
            width={width ? width : 800}
            height={height ? height : 600}
          />
        </div>
        {caption && (
          <p
            className={classNames(
              'block text-sm text-accent-600 dark:text-accent-300 text-center max-w-screen-sm',
              {
                'md:text-right': isRight,
                'md:text-left': isLeft,
              },
            )}
          >
            {caption}
          </p>
        )}
      </div>
      {isColumn ? (
        <div
          className={classNames('md:col-span-1 space-y-6', {
            'md:flex md:flex-col md:justify-center': centeredText,
          })}
        >
          <BasicBlockContent value={body ?? []} />
        </div>
      ) : (
        <BasicBlockContent value={body ?? []} />
      )}
    </div>
  )
}
