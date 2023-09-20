import { type FC } from 'react'

import ReadMoreArrowIcon from '@/components/images/icons/ReadMoreIcon'

interface Props {
  data: any
}

const ArticleHeader: FC<Props> = ({ data }) => {
  const { title, category, description } = data

  return (
    <section className={`hero`}>
      <div className={`hero-wrapper`}>
        <span className={`article-category`}>{category}</span>
        <h1>{title}</h1>
        <p className="text-white/60">{description}</p>
      </div>

      <ReadMoreArrowIcon />
    </section>
  )
}

export default ArticleHeader
