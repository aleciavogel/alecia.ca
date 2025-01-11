export const galleryPetsQueryPartial = `
  _type == 'gallery.pets' => {
    ...,
    images[] {
      ...,
      'imageSrc': asset->url,
      'imageAlt': alt,
    }
  }`
