import { FaInfoCircle } from 'react-icons/fa'

const NotFoundBanner = () => {
  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center gap-y-8 bg-blue-500 dark:bg-zinc-900">
        <FaInfoCircle className="h-16 w-16 text-white" />
        <h1 className="text-2xl text-white">Page not found</h1>
      </section>
    </>
  )
}

export { NotFoundBanner }
