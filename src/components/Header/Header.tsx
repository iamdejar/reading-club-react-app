import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

function Header() {
  return (
    <header className={styles.body}>
      <div>Logo</div>
      {/* <Link to={'/login'}>Login</Link> */}
      <Button component={Link} to="/login">
        Login
      </Button>
    </header>
  )
}

export default Header
