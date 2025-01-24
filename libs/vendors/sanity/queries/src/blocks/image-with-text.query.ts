const imageWithTextSchema = `
    ...,
    image {
      ...,
      'imageSrc': asset->url,
      alt,
      caption,
      'dimensions': asset->metadata.dimensions,
      'bgColor': asset->metadata.palette.dominant.background
    }
`

export const imageWithTextQueryPartial = `
  _type == 'image-with-text' => {
    ${imageWithTextSchema}
  }`
