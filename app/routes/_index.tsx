import { Banner } from '~/features/Banner/Banner'

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
  return <Banner title={title} />
}
