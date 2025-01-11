import { sanityClientMock } from '@alecia/test-helpers'

jest.mock('@alecia/sanity-client', () => sanityClientMock)

import '@testing-library/jest-dom'
