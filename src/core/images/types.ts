import { GalleryPets } from '@alecia/vendors/sanity/types/sanity.types'

export type SinglePetImage = NonNullable<GalleryPets['images']>[number]
