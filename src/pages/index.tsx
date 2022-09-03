import { Helmet } from 'react-helmet-async'
import { Seo } from 'primitive-jsx'
import Hero from '@features/Hero/Hero'
import { useQuery } from '@tanstack/react-query'

const props = {
  hero: {
    title: 'React Template Vite',
    description: 'A React + Typescript starter using Vite 3',
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
      <Seo component={Helmet} title="Home | Vite" />
      <Hero {...props.hero} />
    </>
  )
}

export default HomePage
