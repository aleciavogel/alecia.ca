import { faRectangleTerminal } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const sandPack = defineType({
  name: 'sandpack',
  title: 'Interactive Code Editor',
  icon: () => <FontAwesomeIcon icon={faRectangleTerminal} />,
  type: 'object',
  groups: [{ name: 'content', default: true }, { name: 'options' }],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'template',
      type: 'string',
      description: 'The template to use for the code editor',
      group: 'content',
      options: {
        list: [
          { title: 'React', value: 'react' },
          { title: 'React (TypeScript)', value: 'react-ts' },
          { title: 'Static', value: 'static' },
          { title: 'Solid', value: 'solid' },
          { title: 'Svelte', value: 'svelte' },
          { title: 'Angular', value: 'angular' },
          { title: 'Test (TypeScript)', value: 'test-ts' },
          { title: 'Vanilla', value: 'vanilla' },
          { title: 'Vanilla (TypeScript)', value: 'vanilla-ts' },
          { title: 'Vue', value: 'vue' },
          { title: 'Vue (TypeScript)', value: 'vue-ts' },
          { title: 'Node', value: 'node' },
          { title: 'Next.js', value: 'nextjs' },
          { title: 'Vite', value: 'vite' },
          { title: 'Vite React', value: 'vite-react' },
          { title: 'Vite React (TypeScript)', value: 'vite-react-ts' },
          { title: 'Vite Preact', value: 'vite-preact' },
          { title: 'Vite Preact (TypeScript)', value: 'vite-preact-ts' },
          { title: 'Vite Vue', value: 'vite-vue' },
          { title: 'Vite Vue (TypeScript)', value: 'vite-vue-ts' },
          { title: 'Vite Svelte', value: 'vite-svelte' },
          { title: 'Vite Svelte (TypeScript)', value: 'vite-svelte-ts' },
          { title: 'Astro', value: 'astro' },
        ],
      },
    }),
    defineField({
      name: 'files',
      type: 'array',
      group: 'content',
      of: [{ type: 'sandpack.file' }],
    }),
    defineField({
      name: 'dependencies',
      type: 'array',
      group: 'options',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
            }),
            defineField({
              name: 'version',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'devDependencies',
      type: 'array',
      group: 'options',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
            }),
            defineField({
              name: 'version',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'options',
      type: 'object',
      group: 'options',
      fields: [
        defineField({
          name: 'showTabs',
          description: 'Show the tabs, defaults to `true`',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'closeableTabs',
          description: 'Allow tabs to be closed, defaults to `true`',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'showLineNumbers',
          description: 'Show line numbers, defaults to `true`',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'showInlineErrors',
          description: 'Show inline errors, defaults to `false`',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'showRunButton',
          description: 'Show run button, defaults to `true`',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'wrapContent',
          description: 'Wrap content, defaults to `false`',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'readOnly',
          description: 'Globally set this instance as non-editable, defaults to `false`',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'showReadOnly',
          description:
            'Hide the read-only label that appears on top of the code editor, defaults to `false`',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'initMode',
          description: 'control how some components are going to be initialized on the page.',
          type: 'string',
          options: {
            list: ['immediate', 'lazy', 'user-visible'],
            layout: 'radio',
          },
          initialValue: 'user-visible',
        }),
        defineField({
          name: 'staticResources',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'showNavigator',
          description: 'Show the file navigator, defaults to `true`',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'layout',
          type: 'string',
          options: {
            list: ['console', 'preview', 'tests'],
            layout: 'radio',
          },
          initialValue: 'preview',
        }),
        defineField({
          name: 'editorHeight',
          type: 'number',
          description: 'Height of the editor in pixels, defaults to `300`',
          initialValue: 300,
        }),
        defineField({
          name: 'editorWidthPercentage',
          type: 'number',
          description: 'Width of the editor in percentage, defaults to `50`',
          initialValue: 50,
        }),
        defineField({
          name: 'autoRun',
          description:
            'When set to false, the bundling process will only start when triggered manually by the user.',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'autoReload',
          description:
            'When set to true, the preview will automatically reload when the code changes.',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'resizablePanels',
          description: 'Allow panels to be resized, defaults to `true`',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),
    defineField({
      name: 'showPreview',
      type: 'boolean',
      group: 'options',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({
      title,
      subtitle: 'Interactive Code Editor',
    }),
  },
})
