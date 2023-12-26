import { useHealthcheck } from 'lib/hooks/useHealthcheck'
import { FaReact } from 'react-icons/fa'

export type BannerProps = {
  title: string
}

function Banner(props: BannerProps) {
  const { title } = props

  useHealthcheck()

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-16">
      <FaReact className="h-48 w-48 animate-[spin_5s_linear_infinite] text-black dark:text-primary lg:h-56 lg:w-56 xl:h-64 xl:w-64" />
      <h1 className="text-center text-7xl font-bold text-black dark:text-primary w-10/12 md:text-8xl lg:w-10/12 xl:w-auto lg:text-9xl text">
        {title}
      </h1>
    </section>
  )
}

export { Banner }
