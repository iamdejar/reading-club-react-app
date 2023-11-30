import styles from './Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { setAdminAuth } from 'app/app-reducer'

export default function Header() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isAdminAuth = useAppSelector((state) => state.isAdminAuth)

  function logOut() {
    window.sessionStorage.removeItem('auth-key')
    dispatch(setAdminAuth(false))
    navigate('/')
  }

  return (
    <header className={styles.body}>
      <Button component={Link} to="/">
        Logo
      </Button>

      {isAdminAuth ? (
        <Button variant="contained" onClick={() => logOut()}>
          Sign out
        </Button>
      ) : (
        <Button variant="contained" component={Link} to="/login">
          Sign in
        </Button>
      )}
    </header>
  )
}
