import { buildRoute } from '../routes'

describe('buildRoute', () => {
  it('replaces placeholders with corresponding values', () => {
    const route = '/user/{id}/profile/{section}'
    const values = { id: '123', section: 'settings' }
    const result = buildRoute(route, values)
    expect(result).toBe('/user/123/profile/settings')
  })

  it('throws an error if a placeholder is not provided in values', () => {
    const route = '/user/{id}/profile/{section}'
    const values = { id: '123' } // Missing 'section'
    expect(() => buildRoute(route, values)).toThrow('Missing value for placeholder: section')
  })

  it('handles routes without placeholders', () => {
    const route = '/home'
    const values = { id: '123' } // Extra key in values
    const result = buildRoute(route, values)
    expect(result).toBe('/home') // No replacements needed
  })

  it('handles extra keys in values gracefully', () => {
    const route = '/user/{id}'
    const values = { id: '456', extra: 'ignored' } // 'extra' key not in route
    const result = buildRoute(route, values)
    expect(result).toBe('/user/456') // Ignores 'extra' key
  })

  it('replaces multiple instances of the same placeholder', () => {
    const route = '/tag/{name}/related/{name}'
    const values = { name: 'javascript' }
    const result = buildRoute(route, values)
    expect(result).toBe('/tag/javascript/related/javascript')
  })

  it('handles empty values gracefully', () => {
    const route = '/user/{id}'
    const values = { id: '' } // Empty string for 'id'
    const result = buildRoute(route, values)
    expect(result).toBe('/user/')
  })

  it('throws an error if route contains unmatched placeholders', () => {
    const route = '/user/{id}/profile/{section}'
    const values = {} // No values provided
    expect(() => buildRoute(route, values)).toThrow('Missing value for placeholder: id')
  })

  it('handles complex routes with multiple placeholders', () => {
    const route = '/product/{category}/{id}/details/{type}'
    const values = { category: 'electronics', id: '789', type: 'specs' }
    const result = buildRoute(route, values)
    expect(result).toBe('/product/electronics/789/details/specs')
  })
})
