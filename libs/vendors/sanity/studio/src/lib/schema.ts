import { authorSchemas } from '@alecia/authors-data-access'
import { blogSchemas } from '@alecia/blog-data-access'
import { codeSnippetSchemas } from '@alecia/code-snippets-data-access'
import { courseSchemas } from '@alecia/courses-data-access'
import { experimentSchemas } from '@alecia/experiments-data-access'
import { pageSchemas } from '@alecia/pages-data-access'
import { projectSchemas } from '@alecia/projects-data-access'
import { popQuizSchemas } from '@alecia/quizzes-data-access'
import { resourceSchemas } from '@alecia/resources-data-access'
import { commonSchemas } from '@alecia/sanity-common'
import { siteLayoutSchemas } from '@alecia/site-layout-data-access'

export const schemaTypes = [
  ...commonSchemas,
  ...siteLayoutSchemas,
  ...pageSchemas,
  ...codeSnippetSchemas,
  ...authorSchemas,
  ...blogSchemas,
  ...courseSchemas,
  ...popQuizSchemas,
  ...experimentSchemas,
  ...resourceSchemas,
  ...projectSchemas,
]
