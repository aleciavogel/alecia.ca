import { map } from 'rxjs'
import type { DocumentLocationResolver } from 'sanity/presentation'

const draftableTypes = ['page', 'blog.article', 'experiment', 'course', 'course.chapter', 'project']

// TODO: Refactor this, it's a bit lost in the sauce :(
export const locations: DocumentLocationResolver = (params, context) => {
  // Course chapters need the parent course slug, so use a different query
  if (params.type === 'course.chapter') {
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{
        title,
        metadata,
        "courseSlug": *[_type == "course" && references(^._id)][0].metadata.slug.current
      }`,
      { id: params.id },
      { perspective: 'previewDrafts' },
    )

    return doc$.pipe(
      map((doc) => {
        if (!doc?.metadata?.slug?.current || !doc.courseSlug) return null

        const title =
          (doc.title as string | undefined) ??
          (doc.metadata.title as string | undefined) ??
          'Untitled'

        return {
          locations: [
            {
              title,
              href: `/courses/${doc.courseSlug}/${doc.metadata.slug.current}`,
            },
          ],
        }
      }),
    )
  }

  if (draftableTypes.includes(params.type)) {
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{title,metadata}`,
      { id: params.id, type: params.type },
      {
        perspective: 'previewDrafts',
      },
    )

    return doc$.pipe(
      map((doc) => {
        if (!doc?.metadata?.slug?.current) return null

        let segment = ''

        switch (params.type) {
          case 'blog.article':
            segment = '/blog'
            break
          case 'experiment':
            segment = '/playground'
            break
          case 'course':
            segment = '/courses'
            break
          case 'project':
            segment = '/projects'
            break
        }

        const slug = doc.metadata.slug.current as string
        const path = slug === 'index' ? '' : `/${slug}`
        const title =
          (doc.title as string | undefined) ??
          (doc.metadata.title as string | undefined) ??
          'Untitled'

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
