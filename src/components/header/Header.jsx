import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import styles from './Header.module.css'
import Icon from '../icon/Icon'

function Header () {
  return (
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por Elvis Ferreira</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName="github" link="https://github.com/ElvisTecnicoTI" />
      </div>
    </div>

  )
}

export default Header