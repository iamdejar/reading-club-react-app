import styles from './Login.module.scss'
import Input from 'components/Input/Input'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface formState {
  login: boolean | undefined
  pass: boolean | undefined
}
const initValidState: formState = {
  login: undefined,
  pass: undefined,
}

export default function Login() {
  const navigate = useNavigate()
  const [isInputValid, setInputValid] = useState(initValidState)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const login = String(data.get('login'))
    const pass = String(data.get('password'))

    if (login?.length === 0 || pass?.length === 0) {
      if (login?.length === 0) {
        setInputValid({ ...isInputValid, login: true })
      }
      if (pass?.length === 0) {
        setInputValid({ ...isInputValid, pass: true })
      }
    } else {
      window.sessionStorage.setItem('auth-key', '1234')
      navigate('/admin')
    }

    console.log({
      login: data.get('login'),
      password: data.get('password'),
    })
  }

  return (
    <div className={styles.wrapper}>
      <h1>Sign In</h1>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Input
          name="login"
          type="text"
          label="Login"
          error={isInputValid.login}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          error={isInputValid.pass}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </div>
  )
}
