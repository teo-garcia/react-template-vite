import styles from './NotFoundBanner.module.css'
import { FaSearch } from 'react-icons/fa'
import { Seo } from '@components/Seo/Seo'
import clsx from 'clsx'

const NotFoundBanner = () => {
  return (
    <>
      <Seo title="Vite 4 | 404" />
      <div
        className={clsx(
          'h-100vh d-flex fd-column jc-center ai-center ta-center bc-secondary',
          styles.container
        )}
      >
        <FaSearch className={clsx('c-background', styles.icon)} />
        <h1 className={clsx('c-background fw-bold', styles.title)}>
          We could not find this page
        </h1>
      </div>
    </>
  )
}

export { NotFoundBanner }
