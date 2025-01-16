import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { fas as faSolidIcons } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField } from 'sanity'

/**
 * Icon picker options
 * Used to configure the icon picker field as well as generate the preview
 * @see https://arc.net/l/quote/bslwegxj
 */
export const iconPickerOptions = {
  configurations: [
    {
      title: 'Font Awesome Pro Solid Icons',
      provider: 'fa-pro',
      icons: () =>
        Object.entries(faSolidIcons).map(([name, value]) => ({
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
export const iconPickerField = defineField({
  name: 'icon',
  type: 'iconPicker',
  options: iconPickerOptions,
})
