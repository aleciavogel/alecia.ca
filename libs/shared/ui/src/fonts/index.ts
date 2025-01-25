import localFont from 'next/font/local'

export const dankMono = localFont({
  variable: '--font-dank-mono',
  src: [
    {
      path: './dank-mono/DankMono-Regular.woff2',
    },
    {
      path: './dank-mono/DankMono-Bold.woff2',
      weight: 'bold',
    },
    {
      path: './dank-mono/DankMono-Italic.woff2',
      style: 'italic',
    },
  ],
})

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
      path: './silka/silka-extralight-webfont.woff2',
      weight: '200',
    },
    {
      path: './silka/silka-light-webfont.woff2',
      weight: '300',
    },
    {
      path: './silka/silka-regular-webfont.woff2',
    },
    {
      path: './silka/silka-medium-webfont.woff2',
      weight: '500',
    },
    {
      path: './silka/silka-semibold-webfont.woff2',
      weight: '600',
    },
    {
      path: './silka/silka-bold-webfont.woff2',
      weight: 'bold',
    },
    {
      path: './silka/silka-black-webfont.woff2',
      weight: '900',
    },
    {
      path: './silka/silka-regular-italic-webfont.woff2',
      style: 'italic',
    },
  ],
})
