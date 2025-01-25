import {
  faBriefcase,
  faFile,
  faFlask,
  faGearComplex,
  faGraduationCap,
  faNewspaper,
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { StructureResolver } from 'sanity/structure'

import { group, singleton } from '@alecia/sanity-util/client-utils/sanity-structure-utils'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      group(S, 'Configuration', [
        singleton(S, 'settings', 'Site settings').icon(() => (
          <FontAwesomeIcon icon={faGearComplex} />
        )),
        S.documentTypeListItem('author').title('Authors'),
        S.documentTypeListItem('announcement').title('Announcements'),
        S.documentTypeListItem('redirect').title('Redirects'),
      ]).icon(() => <FontAwesomeIcon icon={faGearComplex} />),

      S.divider(),

      S.documentTypeListItem('page')
        .title('Pages')
        .icon(() => <FontAwesomeIcon icon={faFile} />),

      group(S, 'Articles', [
        S.documentTypeListItem('blog.article').title('Blog articles'),
        S.documentTypeListItem('blog.category').title('Blog categories'),
      ]).icon(() => <FontAwesomeIcon icon={faNewspaper} />),

      group(S, 'Courses', [
        S.documentTypeListItem('course').title('Courses'),
        S.documentTypeListItem('course.category').title('Course categories'),
      ]).icon(() => <FontAwesomeIcon icon={faGraduationCap} />),

      group(S, 'Portfolio', [
        S.documentTypeListItem('project').title('Projects'),
        S.documentTypeListItem('project.tag').title('Project Tags'),
        S.documentTypeListItem('testimonial').title('Testimonials'),
      ]).icon(() => <FontAwesomeIcon icon={faBriefcase} />),

      group(S, 'Playground', [
        S.documentTypeListItem('experiment').title('Experiments'),
        S.documentTypeListItem('experiment.tag').title('Experiment tags'),
        S.documentTypeListItem('resource.category').title('Links & Resources'),
      ]).icon(() => <FontAwesomeIcon icon={faFlask} />),
    ])
