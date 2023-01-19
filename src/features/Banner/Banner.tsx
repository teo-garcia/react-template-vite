import styles from './Banner.module.css'
import { FaReact } from 'react-icons/fa'
import { Box, Text } from 'primitive-jsx'
import type { BannerProps } from '@lib/types/client'
import classNames from 'classnames'

const Banner = (props: BannerProps) => {
  const { title } = props
  return (
    <Box
      className={classNames(
        'h-100vh ta-center d-flex fd-column jc-center ai-center',
        styles.container
      )}
    >
      <FaReact className={classNames('c-background', styles.icon)} />
      <Text
        tag="h1"
        className={classNames('c-background fw-bold', styles.title)}
      >
        {title}
      </Text>
    </Box>
  )
}

export { Banner }
