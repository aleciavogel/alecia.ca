import Blockquote from '@alecia/core/blocks/components/blockquote'
import { TextBlockquoteBlockType } from '@alecia/core/blocks/types'

const TextBlockquote = ({ author, quote }: TextBlockquoteBlockType) => (
  <div className="page-content-block">
    <Blockquote author={author} quote={quote} />
  </div>
)

export default TextBlockquote
