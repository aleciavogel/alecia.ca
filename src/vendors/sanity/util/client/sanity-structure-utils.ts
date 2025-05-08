import { Divider, ListItem, ListItemBuilder, StructureBuilder } from 'sanity/structure'

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
