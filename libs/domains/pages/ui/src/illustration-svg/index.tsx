import dynamic from 'next/dynamic'

import { Illustrations } from '@alecia/constants/images'

const IllustrationSVG = (illustration: Illustrations) =>
  dynamic(() => {
    switch (illustration) {
      case Illustrations.AleciaWave:
        return import('@alecia/graphics/illustrations/alecia/wave')
      case Illustrations.AleciaSit:
        return import('@alecia/graphics/illustrations/alecia/sit')
      case Illustrations.AleciaLaying:
        return import('@alecia/graphics/illustrations/alecia/laying')
      case Illustrations.AleciaIdea:
        return import('@alecia/graphics/illustrations/alecia/idea')
      case Illustrations.HammondSleeping:
        return import('@alecia/graphics/illustrations/hammond/sleeping')
      case Illustrations.PhoebeSleeping:
        return import('@alecia/graphics/illustrations/phoebe/sleeping')
      case Illustrations.PhoebeYarn:
        return import('@alecia/graphics/illustrations/phoebe/yarn')
      case Illustrations.PhoebeLaptop:
        return import('@alecia/graphics/illustrations/phoebe/laptop')
      case Illustrations.HammondScience:
        return import('@alecia/graphics/illustrations/hammond/science')
      case Illustrations.SadieHammondCookies:
        return import('@alecia/graphics/illustrations/sadie/cookies')
      case Illustrations.SadieAteMyWebsite:
        return import('@alecia/graphics/illustrations/sadie/ate-my-website')
      default:
        return import('@alecia/graphics/illustrations/alecia/couch')
    }
  })

export default IllustrationSVG
