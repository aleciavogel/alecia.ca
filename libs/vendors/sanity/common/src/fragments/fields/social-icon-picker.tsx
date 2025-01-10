import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import * as faBrandIcons from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField } from 'sanity'

/**
 * Icon picker options
 * Used to configure the icon picker field as well as generate the preview
 * @see https://arc.net/l/quote/bslwegxj
 */
export const socialIconPickerOptions = {
  configurations: [
    {
      title: 'Font Awesome Free Brand Icons',
      provider: 'fa-brand',
      icons: () =>
        Object.entries(faBrandIcons).map(([name, value]) => ({
          name,
          tags: [name],
          component: () => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 25,
                height: 25,
              }}
            >
              <FontAwesomeIcon icon={value as IconProp} />
            </div>
          ),
        })),
    },
  ],
}

/**
 * Field definition for an icon picker that uses the Font Awesome Pro Solid Icons
 */
export const socialIconPickerField = defineField({
  name: 'icon',
  type: 'socialIconPicker',
  options: socialIconPickerOptions,
})
