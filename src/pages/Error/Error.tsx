import styles from './Error.module.scss'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className={styles.error}>
      <h1>Access is denied</h1>
      <Button variant="contained" component={Link} to="/">
        To Main
      </Button>
    </div>
  )
}
