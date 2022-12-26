import { Helmet } from 'react-helmet-async'
import { useQuery } from '@tanstack/react-query'

import Hero from '@features/Hero/Hero'

const props = {
  hero: {
    title: 'React Template Vite',
    description: 'A React + Typescript starter using Vite 4',
  },
}

const fetcher = () =>
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((res) => res)

function HomePage() {
  useQuery(['Fake ToDo'], fetcher)
  return (
    <>
      <Helmet>
        <title>Home | Vite 4</title>
      </Helmet>
      <Hero {...props.hero} />
    </>
  )
}

export default HomePage
