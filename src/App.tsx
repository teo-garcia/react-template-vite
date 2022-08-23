import Hero from './features/Hero/Hero'

const props = {
  hero: {
    title: 'React Template Vite',
    description: 'A React + Typescript starter using Vite 3',
  },
}

function App() {
  return <Hero {...props.hero} />
}

export default App
