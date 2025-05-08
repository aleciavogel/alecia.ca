interface CourseChapterPageProps {
  params: {
    slug: string
    chapter: string
  }
}

// TODO: implement this page
export default async function CourseChapterPage({
  params: { slug, chapter },
}: CourseChapterPageProps) {
  return <div>I will be a chapter uwu</div>
}
