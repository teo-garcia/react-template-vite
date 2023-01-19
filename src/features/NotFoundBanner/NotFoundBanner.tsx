import styles from './NotFoundBanner.module.css'
import { Box, Text } from 'primitive-jsx'
import { FaSearch } from 'react-icons/fa'
import { Seo } from '@components/Seo/Seo'
import classNames from 'classnames'

const NotFoundBanner = () => {
  return (
    <>
      <Seo title="Vite 4 | 404" />
      <Box
        className={classNames(
          'h-100vh d-flex fd-column jc-center ai-center ta-center',
          styles.container
        )}
        background="secondary"
      >
        <FaSearch className={classNames('c-background', styles.icon)} />
        <Text
          tag="h1"
          className={classNames('c-background fw-bold', styles.title)}
          weight="bold"
        >
          We could not find this page
        </Text>
      </Box>
    </>
  )
}

export { NotFoundBanner }
