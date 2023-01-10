import { render } from '@testing-library/react'
import { App } from './App'

describe('<App /> tests', () => {
  it('Should render without crashing', () => {
    render(<App />)
    expect(true).toBe(true)
  })
})
