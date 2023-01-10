import { useQuery } from '@tanstack/react-query'
import { Hero } from '@features/Hero/Hero'
import { Seo } from '@components/Seo/Seo'

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

const HomePage = () => {
  useQuery(['Fake ToDo'], fetcher)
  return (
    <>
      <Seo title="Home | Vite 4" />
      <Hero {...props.hero} />
    </>
  )
}

export { HomePage }
