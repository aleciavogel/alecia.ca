import { defineType } from 'sanity'

import SanityUIDInput from '@alecia/sanity-ui/sanity-uid-input'

export const uid = defineType({
  name: 'uid',
  title: 'Unique Identifier',
  description: 'Used for anchor/jump links (HTML `id` attribute).',
  type: 'string',
  validation: (Rule) =>
    Rule.regex(/^[a-zA-Z0-9-]+$/g).error('Must not contain spaces or special characters'),
  components: {
    input: SanityUIDInput,
  },
})
