import * as blocks from './blocks'
import * as docs from './documents'
import * as objs from './objects'

export * from './blocks'
export * from './documents'
export * from './objects'

export const schemaTypes = [
  ...Object.values(blocks),
  ...Object.values(docs),
  ...Object.values(objs),
]
