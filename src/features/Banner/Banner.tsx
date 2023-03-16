import styles from './Banner.module.css'
import clsx from 'clsx'
import { FaReact } from 'react-icons/fa'

export type BannerProps = {
  title: string
}

function Banner(props: BannerProps) {
  const { title } = props
  return (
    <section
      className={clsx(
        'h-100vh d-flex fd-column ai-center jc-center bc-background',
        styles.container
      )}
    >
      <FaReact className={clsx('c-primary', styles.icon)} />
      <h1 className={clsx('ta-center c-primary fw-bold', styles.title)}>
        {title}
      </h1>
    </section>
  )
}

export { Banner }
