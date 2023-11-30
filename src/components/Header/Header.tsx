import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

export default function Header() {
  return (
    <header className={styles.body}>
      <Button component={Link} to="/">
        Logo
      </Button>
      <Button variant="contained" component={Link} to="/login">
        Login
      </Button>
    </header>
  )
}
