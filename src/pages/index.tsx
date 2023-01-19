import { useQuery } from '@tanstack/react-query'
import { Banner } from '@features/Banner/Banner'
import { Seo } from '@components/Seo/Seo'

const props = {
  banner: {
    title: 'React Template Vite',
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
      <Seo title="Vite 4 | Home" />
      <Banner {...props.banner} />
    </>
  )
}

export { HomePage }
