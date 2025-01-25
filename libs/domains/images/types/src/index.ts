import { GalleryPets } from '@alecia/sanity-types/sanity.types'

export type SinglePetImage = NonNullable<GalleryPets['images']>[number]
