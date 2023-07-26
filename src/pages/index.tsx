import { Banner } from '@features/Banner/Banner'
import { Seo } from '@components/Seo/Seo'

const HomePage = () => {
  return (
    <>
      <Seo title="Vite 4 | Home" />
      <Banner title="React Template Vite" />
    </>
  )
}

export default HomePage
