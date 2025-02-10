import { FaInfoCircle } from 'react-icons/fa'

const NotFoundBanner = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-10  xl:gap-y-16">
      <FaInfoCircle className="size-16 md:size-28 text-primary dark:text-secondary" />
      <h1 className="text-4xl md:text-6xl font-semibold lg:text-7xl dark:text-white">
        Page not found
      </h1>
      <p className="md:text-2xl dark:text-white">
        The page you are looking for does not exist.
      </p>
    </section>
  )
}

export { NotFoundBanner }
