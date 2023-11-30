import styles from './Login.module.scss'
import Input from 'components/Input/Input'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'

function Login() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log({
      login: data.get('login'),
      password: data.get('password'),
    })
  }

  return (
    <div className={styles.wrapper}>
      <h1>Sign In</h1>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <FormControl>
          <Input name="login" type="text" label="Login" />
        </FormControl>
        <Input name="password" type="password" label="Password" />
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

export default Login
