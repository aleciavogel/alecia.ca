import dynamic from 'next/dynamic'

import { Illustrations } from '@alecia/constants/images'

const IllustrationSVG = (illustration: Illustrations) =>
  dynamic(() => {
    switch (illustration) {
      case Illustrations.AleciaWave:
        return import('@alecia/common/graphics/illustrations/alecia/wave')
      case Illustrations.AleciaSit:
        return import('@alecia/common/graphics/illustrations/alecia/sit')
      case Illustrations.AleciaLaying:
        return import('@alecia/common/graphics/illustrations/alecia/laying')
      case Illustrations.AleciaIdea:
        return import('@alecia/common/graphics/illustrations/alecia/idea')
      case Illustrations.HammondSleeping:
        return import('@alecia/common/graphics/illustrations/hammond/sleeping')
      case Illustrations.PhoebeSleeping:
        return import('@alecia/common/graphics/illustrations/phoebe/sleeping')
      case Illustrations.PhoebeYarn:
        return import('@alecia/common/graphics/illustrations/phoebe/yarn')
      case Illustrations.PhoebeLaptop:
        return import('@alecia/common/graphics/illustrations/phoebe/laptop')
      case Illustrations.HammondScience:
        return import('@alecia/common/graphics/illustrations/hammond/science')
      case Illustrations.SadieHammondCookies:
        return import('@alecia/common/graphics/illustrations/sadie/cookies')
      case Illustrations.SadieAteMyWebsite:
        return import('@alecia/common/graphics/illustrations/sadie/ate-my-website')
      default:
        return import('@alecia/common/graphics/illustrations/alecia/couch')
    }
  })

export default IllustrationSVG
