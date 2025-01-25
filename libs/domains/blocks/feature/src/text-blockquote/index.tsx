import { TextBlockquoteBlockType } from '@alecia/block-types'
import Blockquote from '@alecia/blocks-ui/blockquote'

const TextBlockquote = ({ author, quote }: TextBlockquoteBlockType) => (
  <div className="page-content-block">
    <Blockquote author={author} quote={quote} />
  </div>
)

export default TextBlockquote
