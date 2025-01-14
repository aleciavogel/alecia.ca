import { defineQuery } from 'next-sanity'

const galleryPetsSchema = `
    ...,
    images[] {
      ...,
      _key,
      'imageSrc': asset->url,
      'imageAlt': alt,
    }
`

export const galleryPetsQueryPartial = `
  _type == 'gallery.pets' => {
    ${galleryPetsSchema}
  }`

export const galleryPetsQuery = defineQuery(`
  *[_type == 'gallery.pets'] {
    ${galleryPetsQueryPartial}
  }`)
