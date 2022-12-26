import { Box, Text } from 'primitive-jsx'
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
      <Text tag="h1" color="background" weight="bold" className={styles.title}>
        {title}
      </Text>
      <Text color="background" weight="bold" className={styles.description}>
        {description}
      </Text>
    </Box>
  )
}

export default Hero
