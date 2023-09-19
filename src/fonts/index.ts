import localFont from 'next/font/local'

export const eksellLarge = localFont({
  variable: '--font-eksell-large',
  src: './eksell/eksell-display-large-webfont.woff2',
})

export const eksellSmall = localFont({
  variable: '--font-eksell-small',
  src: './eksell/eksell-display-small-webfont.woff2',
})

export const silka = localFont({
  variable: '--font-silka',
  src: [
    {
      path: './silka/silka-regular-webfont.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './silka/silka-bold-webfont.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './silka/silka-regular-italic-webfont.woff2',
      weight: 'normal',
      style: 'italic',
    },
  ],
})
