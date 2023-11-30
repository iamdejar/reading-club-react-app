import { useEffect } from 'react'
import styles from './Admin.module.scss'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'app/hooks'
import { setAdminAuth } from 'app/app-reducer'

export default function Admin() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const authKey = window.sessionStorage.getItem('auth-key')

  useEffect(() => {
    if (!authKey) {
      dispatch(setAdminAuth(false))
      navigate('/404')
    }
  }, [])

  return <div>Admin</div>
}
