import { type FC } from 'react'

interface ComingSoonHeaderProps {
  pageTitle: string
}

const ComingSoonHeader: FC<ComingSoonHeaderProps> = ({ pageTitle }) => {
  return (
    <section className={`blog-index-header`} role="banner" aria-labelledby="page-title">
      <div className={`blog-index-header-wrapper`}>
        <h1 id="page-title">{pageTitle}</h1>
      </div>
    </section>
  )
}

export default ComingSoonHeader
