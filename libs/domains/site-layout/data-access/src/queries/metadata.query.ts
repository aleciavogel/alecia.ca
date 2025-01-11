export const metadataQueryPartial = `
  _type == 'metadata' => {
    ...,
    'ogimage': image.asset->url + '?w=1200'
  }`
