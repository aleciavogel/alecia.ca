'use client'

import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { iconPicker } from 'sanity-plugin-icon-picker'
import { muxInput } from 'sanity-plugin-mux-input'

import {
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
  SANITY_PROJECT_TITLE,
  SANITY_STUDIO_URL,
} from '@alecia/sanity-constants'

import { locations, structure } from './lib'
import { schemaTypes } from './schemas'

const singletonTypes = ['settings']

/**
 * Sanity configuration definition for Sanity Studio on the frontend
 */
export const SANITY_CONFIG = defineConfig({
  title: SANITY_PROJECT_TITLE,
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  basePath: SANITY_STUDIO_URL,
  plugins: [
    structureTool({
      name: 'content',
      title: 'Content',
      structure,
    }),
    presentationTool({
      name: 'editor',
      title: 'Editor',
      previewUrl: {
        previewMode: {
          enable: '/api/sanity/draft',
          disable: '/api/sanity/disable-draft',
        },
      },
      resolve: { locations },
    }),

    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    // singletonPlugin(singletonNames),

    // Add an image asset source for Unsplash
    unsplashImageAsset(),

    // Sets up AI Assist with preset prompts
    // https://www.sanity.io/docs/ai-assist
    // assistWithPresets(),

    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: SANITY_API_VERSION }),

    // Icon picker plugin
    iconPicker(),

    // Mux video file inputs
    muxInput(),

    // Code input
    codeInput(),
  ],
  tasks: { enabled: false },
  scheduledPublishing: { enabled: false },
  document: {
    actions: (input, { schemaType }) =>
      singletonTypes.includes(schemaType)
        ? input.filter(
            ({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action),
          )
        : input,
  },
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },
})

export default SANITY_CONFIG
