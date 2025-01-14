import { GalleryPets } from '@alecia/sanity-types'

export type SinglePetImage = NonNullable<GalleryPets['images']>[number]
