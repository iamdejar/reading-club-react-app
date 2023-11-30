import styles from './Login.module.scss'
import Input from 'components/Input/Input'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'app/hooks'
import { setAdminAuth } from 'app/app-reducer'

interface formState {
  login: boolean | undefined
  pass: boolean | undefined
}
const initValidState: formState = {
  login: undefined,
  pass: undefined,
}

export default function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isInputValid, setInputValid] = useState(initValidState)
  const [inputValues, setInputValues] = useState({
    login: '',
    password: '',
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (inputValues.login?.length === 0 || inputValues.password?.length === 0) {
      if (inputValues.login?.length === 0) {
        setInputValid({ ...isInputValid, login: true })
      }
      if (inputValues.password?.length === 0) {
        setInputValid({ ...isInputValid, pass: true })
      }
    } else {
      window.sessionStorage.setItem('auth-key', '1234')
      dispatch(setAdminAuth(true))
      navigate('/admin')
    }
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
          value={inputValues.login}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValues({ ...inputValues, login: e.target.value })
          }
        />
        <Input
          name="password"
          type="password"
          label="Password"
          error={isInputValid.pass}
          value={inputValues.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
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
