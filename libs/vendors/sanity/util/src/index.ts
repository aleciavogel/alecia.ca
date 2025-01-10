import type { Divider, ListItem, ListItemBuilder, StructureBuilder } from 'sanity/structure'

/**
 * Create a singleton list item with a title and a child editor.
 * @param S - The StructureBuilder instance
 * @param id - The ID of the singleton
 * @param title - The title of the singleton (default: the ID with spaces)
 */
export const singleton = (S: StructureBuilder, id: string, title?: string): ListItemBuilder =>
  S.listItem()
    .id(id)
    .title(
      title ??
        id
          .split(/(?=[A-Z])/)
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' '),
    )
    .child(S.editor().id(id).schemaType(id).documentId(id))

/**
 * Create a group list item with a title and a list of items.
 * @param S - The StructureBuilder instance
 * @param title - The title of the group
 * @param items - The items in the group
 */
export const group = (
  S: StructureBuilder,
  title: string,
  items: (ListItemBuilder | ListItem | Divider)[],
): ListItemBuilder => S.listItem().title(title).child(S.list().title(title).items(items))

/**
 * Return the text of a block type as a single string. Use in schema previews.
 * @param block - The block to extract text from
 * @param lineBreakChar - The character to use for line breaks (default: '↵ ')
 */
export const getBlockText = (
  block?: {
    children?: {
      text: string
    }[]
  }[],
  lineBreakChar = '↵ ',
): string =>
  block?.reduce((acc, currentBlock, i) => {
    const text = currentBlock.children?.flatMap((child) => child.text).join('') ?? ''
    return acc + text + (i !== block.length - 1 ? lineBreakChar : '')
  }, '') ?? ''

/**
 * Return a string with the count of items in an array, with the correct pluralization.
 * @param arr - The array to count
 * @param singularItem - The singular form of the item (default: 'item')
 * @param pluralizedItem - The plural form of the item (default: `${singularItem}s`)
 */
export function count<T, U extends T[]>(
  arr?: U,
  singularItem = 'item',
  pluralizedItem = `${singularItem}s`,
): string {
  const amount = arr?.length ?? 0
  const isSingular = amount === 1
  const items = isSingular ? singularItem : pluralizedItem

  return `${String(amount)} ${items}`
}
