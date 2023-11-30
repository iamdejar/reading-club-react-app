import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'app/hooks'
import { setAdminAuth } from 'app/app-reducer'
import Main from 'pages/Main/Main'

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

  return <Main />
}
