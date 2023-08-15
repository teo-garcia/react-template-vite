import { waitFor } from '@testing-library/react'
import { Seo } from './Seo'
import { customRender } from '@lib/tools/customRender'
import { getMetaContent } from '@lib/tools/getMetaContent'

describe('<Seo /> tests', () => {
  const mockProps = {
    title: 'Title',
    description: 'Description',
    ogTitle: 'OGTitle',
    ogDescription: 'OGDescription',
    ogImage: 'OGImage',
  }

  test('It should render the provided title prop', async () => {
    customRender(<Seo {...mockProps} />)
    await waitFor(() => expect(document.title).toBe(mockProps.title))
  })

  test('It should render the provided description prop', async () => {
    customRender(<Seo {...mockProps} />)
    await waitFor(() =>
      expect(getMetaContent('[name="description"]')).toBe(mockProps.description)
    )
  })

  test('It should render the provided ogTitle prop', async () => {
    customRender(<Seo {...mockProps} />)
    await waitFor(() =>
      expect(getMetaContent('[property="og:title"]')).toBe(mockProps.ogTitle)
    )
  })

  test('It should render the provided ogDescription prop', async () => {
    customRender(<Seo {...mockProps} />)
    await waitFor(() =>
      expect(getMetaContent('[property="og:description"]')).toBe(
        mockProps.ogDescription
      )
    )
  })

  test('It should render the provided ogImage prop', async () => {
    customRender(<Seo {...mockProps} />)
    await waitFor(() =>
      expect(getMetaContent('[property="og:image"]')).toBe(mockProps.ogImage)
    )
  })
})
