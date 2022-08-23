import Hero from '../features/Hero/Hero'
import { Seo } from 'primitivex'
import { Helmet } from 'react-helmet-async'

const props = {
  hero: {
    title: 'React Template Vite',
    description: 'A React + Typescript starter using Vite 3',
  },
}

function HomePage() {
  return (
    <>
      <Seo component={Helmet} title="Home | RTV" />
      <Hero {...props.hero} />
    </>
  )
}

export default HomePage
