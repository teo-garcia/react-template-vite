import { render } from '@testing-library/react'

import { App } from './App'

describe('<App /> tests', () => {
  test('Should render without crashing', () => {
    render(<App />)

    // TODO: Avoid eslint-plugin-playwright reading jest tests

    expect(true).toBe(true)
  })
})
