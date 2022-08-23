import styles from './404.module.css'
import { Seo } from 'primitivex'
import { Helmet } from 'react-helmet-async'
import { Box, Typography } from 'primitivex'
import { FaSadTear } from 'react-icons/fa'

function NotFoundPage() {
  return (
    <>
      <Seo component={Helmet} title="404 | RTV" />
      <Box className={styles.container} background="secondary">
        <FaSadTear className={styles.icon} />
        <Typography
          tag="h1"
          color="background"
          className={styles.title}
          weight="bold"
        >
          We could not find this page
        </Typography>
      </Box>
    </>
  )
}

export default NotFoundPage
