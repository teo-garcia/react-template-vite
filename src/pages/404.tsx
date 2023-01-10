import styles from './404.module.css'
import { Helmet } from 'react-helmet-async'
import { Box, Text } from 'primitive-jsx'
import { FaSadTear } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 | Vite 4</title>
      </Helmet>
      <Box className={styles.container} background="secondary">
        <FaSadTear className={styles.icon} />
        <Text
          tag="h1"
          color="background"
          className={styles.title}
          weight="bold"
        >
          We could not find this page
        </Text>
      </Box>
    </>
  )
}

export { NotFoundPage }
