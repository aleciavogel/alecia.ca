import { HTMLProps } from 'react'

interface InterceptedLogoTextProps extends HTMLProps<HTMLDivElement> {
  showText?: boolean
  topText?: string
}

/**
 * Name to display in the header when the logo is hovered for intercepted route modals.
 */
export const InterceptedLogoText = ({
  showText = false,
  topText = 'An experiment by',
}: InterceptedLogoTextProps) => {
  if (!showText) return null

  return (
    <div className="text-xs uppercase flex flex-col">
      <span>{topText}</span>
      <span className="font-semibold">Alecia Vogel</span>
    </div>
  )
}
