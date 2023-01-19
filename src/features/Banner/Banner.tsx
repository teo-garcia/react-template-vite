import styles from './Banner.module.css'
import clsx from 'clsx'
import { FaReact } from 'react-icons/fa'
import { Box, Text } from 'primitive-jsx'
import type { BannerProps } from '@lib/types/client'

const Banner = (props: BannerProps) => {
  const { title } = props
  return (
    <Box
      className={clsx(
        'h-100vh ta-center d-flex fd-column jc-center ai-center',
        styles.container
      )}
    >
      <FaReact className={clsx('c-background', styles.icon)} />
      <Text tag="h1" className={clsx('c-background fw-bold', styles.title)}>
        {title}
      </Text>
    </Box>
  )
}

export { Banner }
