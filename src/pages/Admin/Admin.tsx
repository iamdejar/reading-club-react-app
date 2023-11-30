import { useEffect } from 'react'
import styles from './Admin.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const navigate = useNavigate()
  const authKey = window.sessionStorage.getItem('auth-key')

  useEffect(() => {
    if (!authKey) {
      navigate('/404')
    }
  }, [])

  return <div>Admin</div>
}
