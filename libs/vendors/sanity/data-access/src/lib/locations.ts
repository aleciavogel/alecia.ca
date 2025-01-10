import { map } from 'rxjs'
import type { DocumentLocationResolver } from 'sanity/presentation'

const draftableTypes = ['page', 'blog.post', 'experiment', 'course', 'course.chapter', 'project']

export const locations: DocumentLocationResolver = (params, context) => {
  if (draftableTypes.includes(params.type)) {
    const doc$ = context.documentStore.listenQuery(`*[_id == $id][0]{title,metadata}`, params, {
      perspective: 'previewDrafts',
    })

    return doc$.pipe(
      map((doc: any) => {
        if (!doc?.metadata?.slug?.current) return null

        let segment = ''

        switch (params.type) {
          case 'blog.post':
            segment = '/blog'
            break
          case 'experiment':
            segment = '/playground'
            break
          case 'course':
          case 'course.chapter':
            segment = '/courses'
            break
          case 'project':
            segment = '/portfolio'
            break
        }

        const slug = doc.metadata.slug.current as string
        const path = slug === 'index' ? '' : `/${slug}`
        const title = doc.title as string | undefined ?? doc.metadata.title as string | undefined ?? 'Untitled'

        return {
          locations: [
            {
              title,
              href: [segment, path].filter(Boolean).join(''),
            },
          ],
        }
      }),
    )
  }

  return null
}
