import { Box, Typography } from 'primitivex'
import { FaReact } from 'react-icons/fa'
import styles from './Hero.module.css'

type HeroProps = {
  title: string
  description: string
}

function Hero(props: HeroProps) {
  const { title, description } = props
  return (
    <Box className={styles.container}>
      <FaReact className={styles.icon} />
      <Typography tag="h2" className={styles.title}>
        {title}
      </Typography>
      <Typography className={styles.description}>{description}</Typography>
    </Box>
  )
}

export default Hero
