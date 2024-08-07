import { Helmet } from 'react-helmet-async'

import type { SeoProps } from 'lib/misc/types'

const Seo = (props: SeoProps) => {
  const {
    title,
    description = '',
    ogTitle = '',
    ogDescription = '',
    ogImage = '',
  } = props
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
    </Helmet>
  )
}

export { Seo }
