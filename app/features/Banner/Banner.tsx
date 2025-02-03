import { FaReact } from 'react-icons/fa'

import { useHealthcheck } from '~/lib/hooks/useHealthcheck'

export type BannerProps = {
  title: string
}

function Banner(props: BannerProps) {
  const { title } = props

  // TODO: Implement MSW Node
  useHealthcheck()

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-16">
      <FaReact className="size-36 md:size-48 animate-[spin_5s_linear_infinite] text-primary dark:text-secondary xl:size-64" />
      <h1 className="text-center text-6xl lg:text-8xl font-bold text-primary dark:text-secondary ">
        {title}
      </h1>
    </section>
  )
}

export { Banner }
