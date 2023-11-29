import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className={styles.body}>
      <div>Logo</div>
      <Link to={'/login'}>Login</Link>
    </header>
  )
}

export default Header
