import { render } from '@testing-library/react'

import { Layout } from './layout'

describe('<Layout /> tests', () => {
  test('It should render', () => {
    render(<Layout />)
    expect(1 + 1).toBe(2)
  })
})
