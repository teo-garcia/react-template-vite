import { Banner } from '~/features/Banner/Banner'
import { useHealthcheck } from '~/lib/hooks/useHealthcheck'

import type { Route } from './+types/_index'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'React Template RR | Home' },
    { name: 'description', content: 'A basic starter to use RR' },
  ]
}

export async function loader() {
  return {
    title: 'React Template RR',
  }
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { title } = loaderData

  useHealthcheck()

  return <Banner title={title} />
}
